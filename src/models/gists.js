const mongoose = require('mongoose')

const gistsSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    gist: {
        type: String,
        required: true
    },
    dateAdded: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Gists', gistsSchema)