const mongoose = require('mongoose');

const CharacterSchema = new mongoose.Schema({
    id: Number,
    name: String,
    link: String
});

module.exports = mongoose.model('Character', CharacterSchema);