const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    username:{
        type:String,
        Required:true,
      },
      email:{
        type:String,
        Required:true,
        unique:true.valueOf,
      },
      mobile:{
        type:String,
        Required:true,
      },
      
      address:{
        type:String,
        Required:true,
      },
      
      gender:{
        type:String,
        Required:true,
      },
      college:{
        type:String,
        Required:true,
      },
      course:{
        type:String,
        Required:true,
      },
      
      branch:{
        type:String,
        Required:true,
      },
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "user",
        required: "true",
      },

},{timestamps:true})


const courseModel =  mongoose.model('course',courseSchema);

module.exports = courseModel
 



