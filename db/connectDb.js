const mongoose = require('mongoose')

const connectDB =()=>{
    return mongoose.connect('mongodb://localhost:27017/portal')
    .then(()=>{
        console.log('connection success')
    })
    .catch((err)=>{
        console.log(err)
    })
}

module.exports = connectDB
