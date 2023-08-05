const {Schema}= mongoose

const ubicationSchema = new Schema({

    lengthCoordinates:{
        type : Number,
        require: true 
    },
    latitudeCoordinates:{
        type: Number,
        require : true
    },
    event:{
        type: Schema.Types.ObjectId,
        ref: 'event'
    }
})

module.exports = mongoose.model('ubication', ubicationSchema)