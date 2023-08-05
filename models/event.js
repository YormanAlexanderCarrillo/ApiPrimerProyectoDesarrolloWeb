const mongoose = require('mongoose')
const { Schema } = mongoose

const eventSchema = new Schema({
    id: {
        type: Number,
        require: true,
        unique: true
    },
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    dateInitial: {
        type: Date,
        require: true
    },
    dateFinish: {
        type: Date,
        required: true
    },
    value: {
        type: Number,
        required: true
    },
    guest: {
        type: Schema.Types.ObjectId,
        ref: 'guest'
    },
    organizer: {
        type: Schema.Types.ObjectId,
        ref: 'organizer'
    },
    ubication: {
        type: Schema.Types.ObjectId,
        ref: 'ubication'
    }
})

module.exports = mongoose.model('event', eventSchema)