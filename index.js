require('dotenv').config();

const { ApolloServer, gql } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const contentfulDelivery = require("contentful");
const contentfulManagement = require("contentful-management");

const test = require("./test");
const HomeAPI = require("./datasources/homeAPI");

const deliveryClient = contentfulDelivery.createClient({
  space: process.env.SPACE_ID,
  environment: process.env.ENVIRONMENT_ID,
  accessToken: process.env.CONTENT_DELIVERY_API_KEY
});

const managementClient = contentfulManagement.createClient({
  accessToken: process.env.CONTENT_MANAGEMENT_API_KEY
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({
    space_id: process.env.SPACE_ID,
    environment_id: process.env.ENVIRONMENT_ID,
    access_token: process.env.ACCESS_TOKEN,
    content_delivery_api_key: process.env.CONTENT_DELIVERY_API_KEY,
    content_management_api_key: process.env.CONTENT_MANAGEMENT_API_KEY,
    home_entry_id: process.env.HOME_ENTRY_ID,
    deliveryClient,
    managementClient
  }),
  dataSources: () => ({
    test,
    homeAPI: new HomeAPI()
  })
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${ url }`);
});
