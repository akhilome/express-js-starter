const pino = require('pino');
const { env } = require('../config');

exports.logger = pino({
  prettyPrint: !env.isProduction,
});
