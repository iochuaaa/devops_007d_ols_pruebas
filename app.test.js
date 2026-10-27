const request = require('supertest');
const app = require('./app');

describe('Pruebas del Microservicio', () => {
  it('Debe responder con un status 200 en la ruta /api/health', async () => {
    const response = await request(app).get('/api/health');
    
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('success');
  });
});