const express = require('express');
const mongoose = require('mongoose');
const mediaAlgorithm = require('./src/routes/mediaAlgorithm');
const autofill = require('./src/routes/autofill');
const path = require('path');

const app = express();
mongoose.connect(process.env.DB_URL);

app.use(express.static(path.join(__dirname, './client/build')));

app.get('/algorithm', mediaAlgorithm);

app.get('/autofill', autofill);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
});

app.listen(process.env.PORT || 3000);