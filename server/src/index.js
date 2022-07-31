const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = 8080;

mongoose.connect(`mongodb+srv://Admin:${process.env.MONGO_PWD}@find-me-media-cluster.zw2beu5.mongodb.net/?retryWrites=true&w=majority`);

const Media = mongoose.model(
  'media', 
  new mongoose.Schema({
      title: String
  })
);

app.use(cors());

app.get('/', (req, res) => {
  res.send('something else!');
});

app.get('/api/test', (req, res) => {
  Media.findOne({title : '21'}, (_err, media) => {
    if (media) {
      res.json(media);
    }
    else res.send('failure');
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});