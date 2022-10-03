import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import InfiniteScroll from 'react-infinite-scroller';
import ListItem from '../ListItem';
import Loading from '../Loading';
import Modal from '../Modal';
import Error from '../Error';
import errorBoundaryHOC from '../Error/components/ErrorBoundaryHOC';
import PEOPLE_QUERY from './queries/peopleQuery';
import loadMore from './utils/loadMore';

const Body = () => {
  const [modalData, setModalData] = useState({ visible: false, id: null });
  const { data, loading, error, fetchMore } = useQuery(PEOPLE_QUERY, { variables: { first: 6 } });

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
        loadMore={() => loadMore(fetchMore, data)}
        hasMore={data.allPeople.pageInfo.hasNextPage}
        useWindow={false}
        initialLoad={false}
        loader={<Loading key="loading" />}
      >
        {data.allPeople.edges.map(({ node: { id, name, gender } }) => (
          <ListItem key={id} name={name} gender={gender} handleClick={() => setModalData({ visible: true, id })} />
        ))}
      </InfiniteScroll>
    </main>
  );
};

export default errorBoundaryHOC(Body);
