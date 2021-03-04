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
    // const userId = req.body.user;
    db.Post.create(req.body, (err, newPost) => {
        if (err) {
            return console.log(err)
        }

        // db.User.findByIdAndUpdate(
        //     userId, 
        //     { $push: 
        //         {posts: newPost._id}
        //     }, (err, updatedUser) => {
        //     if (err) {
        //         return console.log(err)
        //     }
        // })
        res.json(newPost)
    })
};

// Edit Post
const edit = (req, res) => {
    db.Post.findByIdAndUpdate(
        req.params.postid,
        req.body, 
        { new: true },
        (err, updatedPost) => {
            if (err) {
                return console.log(err)
            }
            res.json(updatedPost)
        })
};

// Delete Post
const destroy = (req, res) => {
    const postId = req.params.postid;
    // const userId = req.body.userid;
    db.Post.findByIdAndDelete(postId, (err, deletedPost) => {
        if (err) {
            return console.log(err)
        }
        // db.User.findByIdAndUpdate(
        //     userId, 
        //     { $pull: 
        //         { posts: deletedPost._id}
        //     }, 
        //     { new: true }, 
        //     (err, updatedUser) => {
        //         if (err) {
        //             return console.log(err)
        //         }
        // })
        res.json(deletedPost)
    })
};







module.exports = {
    index,
    show,
    create,
    edit,
    destroy
};