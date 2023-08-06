const mongoose = require('mongoose')
const {Schema}= mongoose

const adminSchema = new Schema({
    id:{
        type: Number,
        require : true,
        unique : true
    },
    user:{
        type : String,
        require: true 
    },
    password:{
        type: String,
        require : true
    }

})

module.exports = mongoose.model('admin', adminSchema)