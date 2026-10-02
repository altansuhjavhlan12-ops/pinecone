const mongoose = require('mongoose');
const { Schema } = mongoose;
 
const classSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  teachers: [{
    type: String,
    required: true,
  }],
  roomNumber: {
    type: String,
  },
}, {
  timestamps: true
});
 
const ClassModel = mongoose.model('Class', classSchema);
 
module.exports = ClassModel;