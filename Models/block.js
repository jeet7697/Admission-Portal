const mongoose = require('mongoose')

// schema or field
const BlockSchema = new mongoose.Schema({
    title:{
        type:String,
        Required:true,
    },
    description:{
        type:String,
        Required:true,
    },
    image:{
        type:String,
        Required:true, 
    }
},{timestamps:true})

// create model

const BlockModel = mongoose.model('blog',BlockSchema); //BLOG IS NAME OF COLLECTION

module.exports = BlockModel