const User = require('../models/user.model');

exports.get_user = function (req, res) {
  const { _id } = req.user
  User.findOne({ _id }).populate('characters.all').exec(function(err, user) {
    if (err) {
          res.status(500).json({
            message: {
              body: 'Error has occured',
              error: true
            }
          })
        } else {
          res.status(200).json({
            user: {
              id: _id,
              name: user.username,
              characters: {
                want: user.characters.want,
                have: user.characters.have,
                all: user.characters.all
              }
            },
            isAuthenticated: true
          })
        }
  })
};

exports.update_characters = function (req, res) {
  const { have, want } = req.body;
  User.findOne({username: req.query.username}, function (err, user) {
    user.characters.have = have;
    user.characters.want = want;
    user.save()
      .then(() => res.status(200).json('Updated characters list'))
      .catch(err => res.status(400).json('Error could not update' + err))
  })
}