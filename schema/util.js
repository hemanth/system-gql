const os = require('os')
module.exports = {
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
  os: () => ({
    arch: os.arch(),
    type: os.type(),
    release: os.release(),
    hostname: os.hostname()
  }),
  mem: () => ({
    free: os.totalmem()/(1024 * 1024 * 1024),
    total: os.freemem()/(1024 * 1024 * 1024)
  })
}
