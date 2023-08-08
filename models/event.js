const mongoose = require('mongoose')
const { Schema } = mongoose

const eventSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    dateInitial: {
        type: Date,
        required: true
    },
    dateFinish: {
        type: Date,
        required: true
    },
    value: {
        type: Number,
        required: true
    },
    location: {
        longitude: {
            type: Number,
            required: true
        },
        latitude: {
            type: Number,
            required: true
        }
    },
    guest: {
        type: Schema.Types.ObjectId,
        ref: 'guest'
    },
    organizer: {
        type: Schema.Types.ObjectId,
        ref: 'organizer'
    }
})

module.exports = mongoose.model('event', eventSchema)
