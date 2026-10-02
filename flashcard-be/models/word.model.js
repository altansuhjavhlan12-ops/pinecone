import mongoose from "mongoose";
const { Schema } = mongoose;
 
const WordSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
}, {
  timestamps: true
});
 
export const WordModel = mongoose.model('Word', WordSchema)
 
 
 