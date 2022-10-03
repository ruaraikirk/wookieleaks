import { gql } from '@apollo/client';

const PERSON_QUERY = gql`
  query person($id: ID) {
    person(id: $id) {
      name
      id
      birthYear
      eyeColor
      homeworld {
        name
      }
      filmConnection {
        edges {
          node {
            title
            episodeID
          }
        }
      }
    }
  }
`;

export default PERSON_QUERY;
