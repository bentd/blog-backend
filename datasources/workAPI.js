const BaseAPI = require('./baseAPI.js');

const locale = "en-US";

class WorkAPI extends BaseAPI {

  async getWorks() {
    return await this.context.deliveryClient
      .getEntries({ content_type: "work", order: "fields.order"})
      .then(result => result.items)
      .then(entries => entries.map(entry => entry.fields));
  }

}

module.exports = WorkAPI;
