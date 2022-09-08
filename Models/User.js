
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      Required: true,
    },
    email: {
      type: String,
      Required: true,
      unique:true.valueOf,
    },
    password: {
      type: String,
      Required: true,
      unique:true,

    },
    role:{
      type: String,
      default: 'user'
      
    }
    
    
  },
  { timestamps: true }
);

const UserModel = mongoose.model("user",UserSchema)

module.exports = UserModel;
