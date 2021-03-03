const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcryptjs');
const Character = require('./character.model');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  characters: {
    want: [Number],
    have: [Number],
    all: [{ type: mongoose.Schema.Types.ObjectId, ref: Character }],
  },
});

UserSchema.plugin(uniqueValidator, { message: 'is already taken' });

UserSchema.pre('save', function (next) {
  let self = this;
  if (!self.isModified('password')) {
    return next();
  }
  bcrypt.hash(self.password, 10, function (err, passwordHash) {
    if (err) {
      return next(err);
    }
    self.password = passwordHash;
    next();
  });
});

UserSchema.methods.comparePassword = function (password, cb) {
  let self = this;
  bcrypt.compare(password, self.password, function (err, isMatch) {
    if (err) {
      return cb(err);
    } else {
      if (!isMatch) {
        return cb(null, isMatch);
      }
      return cb(null, self);
    }
  });
};

module.exports = mongoose.model('User', UserSchema);
