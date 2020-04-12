var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CharacterSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
});

CharacterSchema.virtual('full_name').get(function () {
  var fullname = '';

  if (this.first_name && this.family_name) {
    fullname = this.family_name + ', ' + this.first_name;
  }

  if (!this.first_name && !this.family_name) {
    fullname = '';
  }
  return fullname;
});

module.exports = mongoose.model('Character', CharacterSchema);
