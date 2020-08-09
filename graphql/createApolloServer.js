const { ApolloServer, gql } = require('apollo-server-express');
const { isEmpty } = require('lodash');
const TasksAPI = require('./tasks-api');

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Task {
    id: ID!
    title: String
    status: String
  }

  type MutationPayload {
    success: Boolean
  }

  type Query {
    tasks: [Task]!
    task(id: ID!): Task
  }

  type Mutation {
    createTask(title: String!, status: String!): Task!
    updateStatusTask(id: ID!, status: String!): Task!
    deleteTask(id: ID!): MutationPayload!
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    tasks: async (_source, _args, { dataSources }) =>
      dataSources.tasksAPI.getTasks(),
  },
  Mutation: {
    createTask: async (_source, { title, status }, { dataSources }) =>
      dataSources.tasksAPI.createTask(title, status),
    updateStatusTask: async (_source, { id, status }, { dataSources }) =>
      dataSources.tasksAPI.updateTask(id, { status }),
    deleteTask: async (_source, { id }, { dataSources }) => {
      const resp = await dataSources.tasksAPI.deleteTask(id);
      return { success: isEmpty(resp) };
    },
  },
};

const createApolloServer = () =>
  new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
      tasksAPI: new TasksAPI(),
    }),
  });

module.exports = createApolloServer;
