import { gql } from 'apollo-boost';

export const GET_ALL_TODOS = gql`
  query GetTodosQuery {
    getAllTodos {
      id
      title
      body
      archived
      updatedAt
      createdAt
    }
  }
`;
