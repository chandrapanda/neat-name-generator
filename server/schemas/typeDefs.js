const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type StudentName {
    _id: ID!
    studentName: String!
  }

  #   type Mutation {
  #     addName(
  #       studentName: String!
`;
module.exports = typeDefs;
