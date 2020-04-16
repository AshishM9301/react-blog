const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const items = require('./routes/api/items');
const users = require('./routes/api/users');

const app = express();

//Body Parser Miodddle Ware
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Cookie Parser Middle Ware
app.use(cookieParser());

// DB Config
const config = require('./config/keys');

mongoose
  .connect(config.mongoURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log('Mongo Db connected'))
  .catch((err) => console.log(err));

// Connect to mongo

//  Use Routes
app.use('/api/items', items);
app.use('/api/users', users);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Started on port ${port}`));
