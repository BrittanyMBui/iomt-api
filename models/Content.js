const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema ({
    title: {
        type: String,
    },
    author: {
        type: String,
    },
    link: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
});

const Content = mongoose.model('Content', contentSchema);
module.exports = Content;