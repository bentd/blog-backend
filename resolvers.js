module.exports = {
  Query: {
    testHome: (_, __, { dataSources }) =>
      dataSources.test,
    home: (_, __, { dataSources }) =>
      dataSources.homeAPI.getHome()
  }
};
