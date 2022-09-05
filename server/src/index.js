const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const algorithm = require('./routes/algorithm');
const autofill = require('./routes/autofill')

const port = 8080;

mongoose.connect(`mongodb+srv://Admin:${process.env.MONGO_PWD}@find-me-media-cluster.zw2beu5.mongodb.net/find-me-media?retryWrites=true&w=majority`);

app.use(cors());

app.get('/api/algorithm', algorithm);
app.get('/api/autofill', autofill); 

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});