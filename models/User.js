const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }],
    content: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Content'
    }]
});

const User = mongoose.model('User', userSchema);
module.exports = User;