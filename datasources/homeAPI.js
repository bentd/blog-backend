const { RESTDataSource } = require('apollo-datasource-rest');

class HomeAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://cdn.contentful.com/spaces/";
  }

  willSendRequest(request) {
    request.params.set('access_token', this.context.access_token);
  }

  async getHome() {
    return JSON.parse(await this.get(`${ this.context.space_id }/environments/${ this.context.environment_id }/entries/${ this.context.home_entry_id }`)).fields;
  }
}

module.exports = HomeAPI;
