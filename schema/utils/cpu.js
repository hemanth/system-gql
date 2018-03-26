const os = require('os');
module.exports = () => {
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
};
