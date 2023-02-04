const { gql } = require("apollo-server");

const typeDefs = gql`
  type Video {
    id: ID!
    title: String!
    description: String!
    thumbnail_small: String
    thumbnail_medium: String
    thumbnail_large: String
    url: String
  }

  type Query {
    videos: [Video]!
  }
`;

module.exports = { typeDefs };
