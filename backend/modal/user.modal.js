import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName : {
    type : String,
    reqiured : true
  },
  email : {
    type : String,
    reqiured : true
  },
  password : {
    type : String,
    required : true
  }
}, {timestamps : true});

const userModal = new mongoose.model('Users', userSchema);

export default userModal