module.exports = {};
const axios = require("axios");

class Service {
  async gameList(url) {
    let record = null;
    try {
      const success = await axios.get(url);
      // noinspection JSValidateTypes
      record = success?.data || [];
    } catch (e) {
      console.log(e);
    }

    return record;
  }
}

module.exports = new Service();
