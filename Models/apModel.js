const mongoose = require('mongoose')

const apSchema = new mongoose.Schema({
    doctor: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true
    },
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true

    },
    userId: {
        type: String,
        required: true,

    }

})

const appointments = mongoose.model('appointments', apSchema)
module.exports = appointments