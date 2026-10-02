import mongoose from "mongoose";
const { Schema } = mongoose;
 
const cardSchema = new mongoose.Schema({
  user:{
    ref:'User',
    type:mongoose.Types.ObjectId,
    required: true
},
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
},
);
 
export const CardModel = mongoose.model('Card', cardSchema);
 