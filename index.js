const express = require('express');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3007;

// Middleware
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  console.log('Root route hit');
  res.send('Welcome to SIT737 Task 10.1P Microservice!');
});

app.get('/api/info', (req, res) => {
  res.json({ status: 'Service is up and running!', timestamp: new Date() });
});

// Server start
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
