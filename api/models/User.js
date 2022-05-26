const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    passwordhash: {
        type: String,
        required: true
    }
},{timestamps: true})


module.exports = mongoose.model('usersEvents', userSchema);