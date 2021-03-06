const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    body: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
})

const Post = mongoose.model('Post', postSchema);
module.exports = Post;