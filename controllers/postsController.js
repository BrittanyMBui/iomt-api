const db = require('../models');

// Current Path = '/posts

// Show All Posts
const index = (req, res) => {
    db.User.findById(req.currentUserId).populate('posts').exec((err, foundUser) => {
        if (err) {
            return console.log(err)
        }
        res.json(foundUser.posts)
    })
};

// Show One Post
const show = (req, res) => {
    db.User.findById(req.currentUserId, (err, foundUser) =>{
        if (err) {
            return console.log(err)
        }
        db.Post.findById(req.params.postid, (err, foundPost) => {
            if (err) {
                return console.log(err)
            }
            res.json(foundPost)
        })
    })
}



// const show = (req, res) => {
//     db.Post.findById(req.params.postid, (err, foundPost) => {
//         if (err) {
//             return console.log(err);
//         }
//         res.json(foundPost)
//     })
// };

// Create Post
const create = (req, res) => {
    db.User.findById(req.currentUserId, (err, foundUser) => {
        if (err) {
            return console.log(err)
        }
        const context = {
            title: req.body.title,
            body: req.body.body,
            user: foundUser._id,
        };

        db.Post.create(context, (err, newPost) => {
            if (err) {
                return console.log(err)
            }
            foundUser.posts.push(newPost);
            foundUser.save((err, savedUser) => {
                if (err) {
                    return console.log(err)
                }
            })
            res.json(newPost);
        })
    })
    // const userId = req.body.currentUserId;
    // db.Post.create(req.body, (err, newPost) => {
    //     if (err) {
    //         return console.log(err)
    //     }

    //     db.User.findByIdAndUpdate(
    //         userId, 
    //         { $push: 
    //             {posts: newPost._id}
    //         }, (err, updatedUser) => {
    //         if (err) {
    //             return console.log(err)
    //         }
    //     })
    //     res.json(newPost)
    // })
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
        db.User.findByIdAndUpdate(
            userId, 
            { $pull: 
                { posts: deletedPost._id}
            }, 
            { new: true }, 
            (err, updatedUser) => {
                if (err) {
                    return console.log(err)
                }
        })
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