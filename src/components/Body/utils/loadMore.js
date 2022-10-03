const loadMore = (fetchMore, data) => {
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

export default loadMore;
