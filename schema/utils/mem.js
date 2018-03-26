const os = require('os');
module.exports = () => ({
  total: os.totalmem()/(1024 * 1024 * 1024),
  free: os.freemem()/(1024 * 1024 * 1024)
})
