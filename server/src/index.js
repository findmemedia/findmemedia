const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

app.use(cors());

app.get('/', (req, res) => {
  res.send('something else!');
});

app.get('/api/test', (req, res) => {
  res.send('test');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});