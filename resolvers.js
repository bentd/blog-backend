module.exports = {
  Query: {
    testHome: (_, __, { dataSources }) =>
      dataSources.test,
    home: (_, __, { dataSources }) =>
      dataSources.homeAPI.getHome()
  },
  Mutation: {
    updateName: (_, name, { dataSources }) =>
      dataSources.homeAPI.updateName(name),
    updateHome: (_, args, { dataSources }) =>
      dataSources.homeAPI.updateHome(args)
    }
};
