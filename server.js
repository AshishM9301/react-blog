const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

//Body Parser Miodddle Ware
app.use(bodyParser.json());

// DB Config
const Uri = require('./config/keys')

mongoose.connect(Uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then(() => console.log("Mongo Db connected")).catch(err => console.log(err))

// Connect to mongo

//  Use Routes
app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Started on port ${port}`));