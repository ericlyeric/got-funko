console.log(
  "This script populates some test  to your database. \
  Usage in CLI: node populatedb 'mongodb+srv://cooluser:coolpassword@cluster0-mbdj7.mongodb.net/local_library?retryWrites=true'",
);

var userArgs = process.argv.slice(2);

var async = require('async');
var Character = require('./models/character');

var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on(
  'error',
  console.error.bind(console, 'MongoDB connection error: '),
);

var characters = [];

function characterCreate(first_name, last_name, cb) {
  var character = new Character({
    first_name: first_name,
    last_name: last_name,
  });

  character.save(function (err) {
    if (err) {
      cb(err, null);
      return;
    }
    console.log('New Character: ' + character);
    characters.push(character);
    cb(null, character);
  });
}

function createCharacters(cb) {
  async.series(
    [
      function (callback) {
        characterCreate('Daenerys', 'Targaryen', callback);
      },
      function (callback) {
        characterCreate('Jon', 'Snow', callback);
      },
      function (callback) {
        characterCreate('Arya', 'Stark', callback);
      },
      function (callback) {
        characterCreate('Khal', 'Drogo', callback);
      },
    ],
    cb,
  );
}

async.series([createCharacters], function (err, results) {
  if (err) {
    console.log('FINAL ERR: ' + err);
  }
  mongoose.connection.close();
});
