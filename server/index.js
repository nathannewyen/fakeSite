const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema/schema");
const { resolvers } = require("./resolvers/resolvers");
const port = process.env.PORT || 4000;

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
