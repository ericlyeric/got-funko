require('dotenv').config();
const express = require('express');
const createError = require('http-errors');
const cors = require('cors');
var cookieParser = require('cookie-parser');
const logger = require('morgan');

const port = process.env.PORT || 3001;

// routes go here
var indexRouter = require('./routes/index');
var charactersRouter = require('./routes/characters');
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
// var catalogRouter = require('./routes/catalog'); //Import routes for "catalog" area of site
// var compression = require('compression');
// var helmet = require('helmet');

const app = express();

// maybe use helmet after to protect routes
// app.use(helmet());

var mongoose = require('mongoose');
var local_db = process.env.MONGODB_LOCAL;
var mongoDB = process.env.MONGODB_CLOUD || local_db;
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
var db = mongoose.connection;
db.on(
  'error',
  console.error.bind(console, 'MongoDB connection error'),
);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
// maybe add compression after

// add routes here
app.use('/', indexRouter);
app.use('/characters', charactersRouter);
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use('/catalog', catalogRouter); // Add catalog routes to middleware chain.

// app.get('/', (req, res) => res.send('Hello World!'));

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.get('/', function (req, res) {
  throw new Error('BROKEN'); // Express will catch this on its own.
});

app.listen(port, () =>
  console.log(
    `Server started, listening at http://localhost:${port}`,
  ),
);

module.exports = app;
