require('dotenv').config();

const { ApolloServer, gql } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const test = require("./test");
const HomeAPI = require("./datasources/homeAPI");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({
    space_id: process.env.SPACE_ID,
    environment_id: process.env.ENVIRONMENT_ID,
    access_token: process.env.ACCESS_TOKEN,
    home_entry_id: process.env.HOME_ENTRY_ID
  }),
  dataSources: () => ({
    test,
    homeAPI: new HomeAPI()
  })
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${ url }`);
});
