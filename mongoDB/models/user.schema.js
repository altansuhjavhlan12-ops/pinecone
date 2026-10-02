const mongoose = require('mongoose');
const { Schema } = mongoose;
 
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  classId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class',
    required: true
  }
}, {
  timestamps: true
});
 
const UserModal = mongoose.model('User', userSchema);
 
module.exports = UserModal;
 