const mongoose = require('mongoose');

const ThirdPartyProviderSchema = new mongoose.Schema({
  provider_name: {
    type: String,
    default: null,
  },
  provider_id: {
    type: String,
    default: null,
  },
  provider_data: {
    type: {},
    default: null,
  },
});

const UserSchema = new mongoose.Schema({
  name: {
    familyName: {
      type: String,
      default: null,
    },
    givenName: {
      type: String,
      default: null,
    },
  },
  email: {
    type: String,
    default: null,
    is_verified: {
      type: Boolean,
      default: false,
    },
  },
  third_party_auth: [ThirdPartyProviderSchema],
  date: {
    type: Date,
    default: Date.now,
  },
  photos: [],
});

module.exports = User = mongoose.model('users', UserSchema);
