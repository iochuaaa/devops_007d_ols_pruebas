const express = require('express');
const app = express();

app.use(express.json());

// Endpoint básico de salud (Healthcheck)
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'El microservicio está funcionando correctamente',
    version: '1.0.0'
  });
});

module.exports = app;