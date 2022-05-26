const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    information: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
},{timestamps: true})


module.exports = mongoose.model('events', postSchema);