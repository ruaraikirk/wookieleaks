import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import InfiniteScroll from 'react-infinite-scroller';
import ListItem from './ListItem';
import Loading from './Loading';
import Modal from './Modal/Modal';
import Error from './ErrorBoundary/Error';
import errorBoundaryHOC from './ErrorBoundary/ErrorBoundaryHOC';

// TODO Sort data by name
// TODO Add optional advanced feature
// TODO Refactor and optimise where appropriate

export const PEOPLE_QUERY = gql`
  query People($first: Int, $after: String) {
    allPeople(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        cursor
        node {
          id
          name
        }
      }
    }
  }
`;

const Body = () => {
  const [modalData, setModalData] = useState({ visible: false, id: null });
  const { data, loading, error, fetchMore } = useQuery(PEOPLE_QUERY, { variables: { first: 6 } });

  // computed value to know if there are more pages after the last result
  const hasNextPage = () => data.allPeople.pageInfo.hasNextPage;

  // Function to load more content and update query result
  const loadMore = () => {
    // fetchMore function from `useQuery` to fetch more content with `updateQuery`
    fetchMore({
      // update `after` variable with `endCursor` from previous result
      variables: {
        after: data.allPeople.pageInfo.endCursor
      },

      // pass previous query result and the new results to `updateQuery`
      updateQuery: (previousQueryResult, { fetchMoreResult }) => {
        // define edges and pageInfo from new results
        const newEdges = fetchMoreResult.allPeople.edges;
        const pageInfo = fetchMoreResult.allPeople.pageInfo;

        // if newEdges actually have items,
        return newEdges.length
          ? // return a reconstruction of the query result with updated values
            {
              // spread the value of the previous result
              ...previousQueryResult,

              allPeople: {
                // spread the value of the previous `allStarhips` data into this object
                ...previousQueryResult.allPeople,

                // concatenate edges
                edges: [...previousQueryResult.allPeople.edges, ...newEdges],

                // override with new pageInfo
                pageInfo
              }
            }
          : // else, return the previous result
            previousQueryResult;
      }
    });
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <main className="flex justify-around flex-1 overflow-auto">
      <Modal modalData={modalData} onClose={() => setModalData({ visible: false, id: null })} name="Luke Skywalker" />
      <InfiniteScroll
        className="w-10/12"
        loadMore={loadMore}
        hasMore={hasNextPage()}
        useWindow={false}
        initialLoad={false}
        loader={<Loading key="loading" />}
      >
        {data.allPeople.edges.map(({ node: { id, name } }) => (
          <ListItem key={id} name={name} handleClick={() => setModalData({ visible: true, id })} />
        ))}
      </InfiniteScroll>
    </main>
  );
};

export default errorBoundaryHOC(Body);
