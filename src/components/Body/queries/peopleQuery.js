import { gql } from '@apollo/client';

const PEOPLE_QUERY = gql`
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
          gender
        }
      }
    }
  }
`;

export default PEOPLE_QUERY;
