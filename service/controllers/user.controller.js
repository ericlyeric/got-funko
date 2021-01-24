const User = require('../models/user.model');

exports.get_user = function (req, res) {
  const { _id } = req.user;
  User.findOne({ _id }, 'name characters', function (err, user) {
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
          name: user.name,
          characters: user.characters.map(element => {
            return {
              id: element._id,
              name: element.name,
              title: element.title,
              isWant: element.isWant,
              isHave: element.isHave,
              updatedAt: element.updatedAt
            }
          })
        },
        isAuthenticated: true
      })
    }
  })
};

exports.update_character = function (req, res) {
  // const { weight, date, _id } = req.body;
  // User.findById( req.params.id, 'weights', function (err, user) {
  //     if (user.weights.id(_id)) {
  //         user.weights.id(_id).weight = weight;
  //         user.weights.id(_id).date = date;
  //         user.save()
  //             .then(() => res.json('Weight updated'))
  //             .catch(err => res.status(400).json('Error could not update' + err))
  //     }
  //     else {
  //         user.weights.push({
  //             weight,
  //             date
  //         });
  //         user.save()
  //             .then(() => res.json('Weight added'))
  //             .catch(err => res.status(400).json('Error could not add ' + err))
  //     }
  // })
}