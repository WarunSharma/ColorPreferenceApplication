const mongoose = require('mongoose');

const UserPreferenceSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  colorpreference: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('UserPreference', UserPreferenceSchema);