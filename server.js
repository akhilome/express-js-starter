const http = require('http');

const app = require('./app');
const { env } = require('./config');
const { logger } = require('./common/logger');

process.on('rejectionHandled', () => null); // so node stops dumping rejectionHandled messages to stdout
process.on('unhandledRejection', (_, promise) => {
  promise.catch((e) => logger.error('Haha, unhandled promise rejection go brrr...', e));
});

const server = http.createServer(app);

server.listen(env.port);
server.on('listening', () => logger.info(`server running on port ${env.port}`));
