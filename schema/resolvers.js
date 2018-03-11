const os = require('os');
const util = {
  cpus: () => {
      const {
        model,
        speed
      } = os.cpus()[0];
      const count = os.cpus().length;
      return {
        model,
        speed,
        count
      }
  },
  os: () => {
    return  {
      arch: os.arch(),
      type: os.type(),
      release: os.release(),
      hostname: os.hostname()
    }
  }
}
module.exports = {
  Query: {
    info: (root, {filter}) => {
      return {
        cpus: util.cpus(),
        os: util.os()
      };
    }
  }
}
