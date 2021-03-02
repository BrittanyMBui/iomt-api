const db = require('../models');

// Current Path = '/posts

// Show All Posts
const index = (req, res) => {
    db.Post.find({}, (err, allPosts) => {
        if (err) {
            return console.log(err)
        }
        res.json(allPosts)
    })
};

// Show One Post
const show = (req, res) => {
    db.Post.findById(req.params.postid, (err, foundPost) => {
        if (err) {
            return console.log(err);
        }
        res.json(foundPost)
    })
};

// Create Post
const create = (req, res) => {
    const userId = req.body.user;
    db.Post.create(req.body, (err, newPost) => {
        if (err) {
            return console.log(err)
        }

        db.User.findByIdAndUpdate(userId, 
            { $push: 
                {posts: newPost._id}
            }, (err, updatedUser) => {
            if (err) {
                return console.log(err)
            }
        })
        res.json(newPost)
    })
};

// Edit Post
const edit = (req, res) => {
    
}
// Delete Post
const destroy = (req, res) => {

}







module.exports = {
    index,
    show,
    create,
    edit,
    destroy
};