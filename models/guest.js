const mongoose = require('mongoose')
const {Schema}= mongoose

const guestSchema = new Schema({
    id:{
        type: Number,
        require : true,
        unique : true
    },
    nameGuest:{
        type : String,
        require: true 
    },
    event:{
        type: Schema.Types.ObjectId,
        ref: 'event'
    }

})

module.exports = mongoose.model('guest', guestSchema)