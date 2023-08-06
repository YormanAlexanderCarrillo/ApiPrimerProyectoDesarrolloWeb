const mongoose = require('mongoose')
const {Schema}= mongoose

const ubicationSchema = new Schema({
    lengthCoordinates:{
        type : Number,
        require: true 
    },
    latitudeCoordinates:{
        type: Number,
        require: true
    }
})

module.exports = mongoose.model('ubication', ubicationSchema)