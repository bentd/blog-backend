const { DataSource } = require('apollo-datasource');

const locale = "en-US";

class InfoAPI extends DataSource {

  initialize(config) {
    this.context = config.context;
  }

  async getInfo() {
    return await this.context.deliveryClient
      .getEntry(this.context.info_entry_id)
      .then(entry => entry.fields);
  }

  async updateField(field) {
    return await this.context.managementClient.getSpace(this.context.space_id)
      .then(space => space.getEnvironment(this.context.environment_id))
      .then(environment => environment.getEntry(this.context.home_entry_id))
      .then(entry => {
        entry.fields.name[locale] = field.name;
        return entry.update();
      })
      .then(entry => {
        let success = entry.fields.name[locale] == field.name;
        return { success, fields: InfoAPI.removeLocale(entry.fields) };
      });
  }

  async updateInfo(object) {
    return await this.context.managementClient.getSpace(this.context.space_id)
      .then(space => space.getEnvironment(this.context.environment_id))
      .then(environment => environment.getEntry(this.context.home_entry_id))
      .then(entry => {
        for (let key of Object.keys(object.home)) {
          entry.fields[key][locale] = object.home[key];
        }
        return entry.update();
      })
      .then(entry => {
        return entry.publish();
      })
      .then(entry => {
        let success = true;
        for (let key of Object.keys(object.home)) {
          success = success && (entry.fields[key][locale] == object.home[key]);
        }
        return { success, fields: InfoAPI.removeLocale(entry.fields) };
      });
  }

  static addLocale(object) {
    let keys = Object.keys(object);
    let newObject = {};
    for (let key of keys) {
      newObject[key][locale] = object[key];
    }
    return newObject;
  }

  static removeLocale(object) {
    let keys = Object.keys(object);
    let newObject = {};
    for (let key of keys) {
      newObject[key] = object[key][locale];
    }
    return newObject;
  }

}

module.exports = InfoAPI;
