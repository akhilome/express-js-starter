const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('should respond with a 200', async () => {
    const response = await request(app).get('/');
    expect(response.status).toEqual(200);
  });
});

describe('Invalid Route', () => {
  it('should respond with a 404', async () => {
    const response = await request(app).get('/invalid-endpoint');
    expect(response.status).toEqual(404);
  });
});
