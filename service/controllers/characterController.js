var async = require('async');
var Character = require('../models/character');

exports.character_list = function (req, res, next) {
  Character.find()
    .populate('character')
    .sort([['first_name', 'ascending']])
    .exec(function (err, list_characters) {
      if (err) {
        return next(err);
      }
      res.send({
        list_characters,
      });
      //   console.log(list_characters);
    });
};
