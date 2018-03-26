const os = require('os');
module.exports = () => ({
  arch: os.arch(),
  type: os.type(),
  release: os.release(),
  hostname: os.hostname()
});
