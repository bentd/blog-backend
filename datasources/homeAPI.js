const { RESTDataSource } = require('apollo-datasource-rest');

class HomeAPI extends RESTDataSource {

  willSendRequest(request) {
    if (request.method === "GET") {
      request.params.set('access_token', this.context.access_token);
    }
    if (request.method === "PUT") {
      request.headers.set('Authorization', `Bearer ${ this.context.content_management_api_key }`);
      request.headers.set('X-Contentful-Version', `Bearer ${ this.context.content_management_api_key }`);
    }
  }

  async resolveURL(request) {
    if (request.method === "GET" ) {
      this.baseURL = "https://cdn.contentful.com/spaces/";
    }
    if (request.method === "PUT") {
      this.baseURL = "https://api.contentful.com/spaces/";
    }
    return super.resolveURL(request);
  }

  async getHome() {
    return await this.context.deliveryClient.getEntry(this.context.home_entry_id).then(entry => entry.fields);
  }

  async updateHome(home) {
    return this.put(`${ this.context.space_id }/environments/${ this.context.environment_id }/entries/${ this.context.home_entry_id }`);
  }

}

module.exports = HomeAPI;
