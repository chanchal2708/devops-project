const express = require('express');
const app = express();
const PORT = 4000;

app.get('/', function(req, res) {
  res.send('<h1>Hello from My DevOps Project!</h1>');
});

app.get('/health', function(req, res) {
  res.json({ status: 'OK' });
});

app.listen(PORT, function() {
  console.log('Server running on http://localhost:' + PORT);
});