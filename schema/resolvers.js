const utils = require("./utils")
module.exports = {
  Query: {
    info: (root, {filter}) => {
  console.log(utils.mem());
      return {
        cpus: utils.cpus(),
        os: utils.os(),
        mem: utils.mem()
      };
    }
  }
}
