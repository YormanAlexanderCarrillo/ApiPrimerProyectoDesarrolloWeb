const mongoose = require('mongoose')
const { Schema } = mongoose

const organizerSchema = new Schema({
    id: {
        type: Number,
        unique: true,
        require: true
    },
    nameOrganize: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        require: true
    },
    event:{
        type: Schema.Types.ObjectId,
        ref: 'event'
    }
}
)

module.exports = mongoose.model('organizer', organizerSchema)