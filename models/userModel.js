const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: 25
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minLength: 5
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
});

const UserModel = mongoose.model('users', userSchema);

module.exports = UserModel;
