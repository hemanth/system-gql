const util = require("./util")
module.exports = {
  Query: {
    info: (root, {filter}) => {
      return {
        cpus: util.cpus(),
        os: util.os(),
        mem: util.mem()
      };
    }
  }
}
