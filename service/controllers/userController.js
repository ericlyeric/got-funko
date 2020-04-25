var User = require('../models/user');

exports.getUserById = async function (req, res, next) {
  await User.findById(id).exec();
};
