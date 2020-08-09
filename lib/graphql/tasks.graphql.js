import { gql } from '@apollo/client';

export const TASKS_QUERY = gql`
  query Tasks {
    tasks {
      id
      title
      status
    }
  }
`;

export const DELETE_TASK = gql`
  mutation DeleteTask($id: ID!) {
    deleteTask(id: $id) {
      success
    }
  }
`;

export const UPDATESTATUS_TASK = gql`
  mutation updateStatusTask($id: ID!, $status: String!) {
    updateStatusTask(id: $id, status: $status) {
      id
      status
    }
  }
`;
