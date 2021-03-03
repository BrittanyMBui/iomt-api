const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema ({
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

const Article = mongoose.model('Article', articleSchema);
module.exports = Article;