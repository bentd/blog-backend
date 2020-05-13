module.exports = {
  Query: {
    testInfo: (_, __, { dataSources }) =>
      dataSources.test,
    info: (_, __, { dataSources }) =>
      dataSources.infoAPI.getInfo(),
    works: (_, __, { dataSources }) =>
      dataSources.workAPI.getWorks()
  },
  Mutation: {
    updateField: (_, field, { dataSources }) =>
      dataSources.infoAPI.updateField(field),
    updateInfo: (_, args, { dataSources }) =>
      dataSources.infoAPI.updateInfo(args)
    }
};
