const BaseAPI = require('./baseAPI.js');

const locale = "en-US";

class InfoAPI extends BaseAPI {

  async getInfo() {
    return await this.context.deliveryClient
      .getEntry(this.context.info_entry_id)
      .then(entry => entry.fields);
  }

}

module.exports = InfoAPI;
