const { Router } = require('express');
const { SuccessResponseObject } = require('../common/http');

const r = Router();

r.get('/', (_, res) => {
  res.json(new SuccessResponseObject('javascript express boilerplate 🔥'));
});

module.exports = r;
