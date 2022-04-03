const express = require('express');
const mongoose = require('mongoose');
const mediaAlgorithm = require('./src/routes/mediaAlgorithm');

const app = express();
mongoose.connect(process.env.DB_URL);

app.get('/algorithm', mediaAlgorithm);

app.listen(process.env.PORT || 3000);