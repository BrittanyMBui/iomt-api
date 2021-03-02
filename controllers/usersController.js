const db = require('../models');
const bcrypt = require('bcrypt');

// - /users

// USER SIGN-UP
const signup = (req, res) => {
    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return console.log(err);
        }

        bcrypt.hash(req.body.password, salt, (err, hashedPassword) => {
            const newUser = {
                username: req.body.username,
                avatar: req.body.avatar,
                email: req.body.email,
                password: hashedPassword,
            }

            db.User.create(newUser, (err, createdUser) => {
                if (err) throw err;
                // req.session.user = createdUser;
                res.json(createdUser);
            })
        })
    })
};

// USER LOGIN
const login = (req, res) => {
    db.User.findOne( { email: req.body.email }, (err, foundUser) => {
        if (err) {
            return console.log(err)
        }

        if (!foundUser) {
            return res.send('User does not exist');
        }

        bcrypt.compare(req.body.password, foundUser.password, (err, result) => {
            if (err) {
                console.log(err)
            }

            if (result) {
                // req.session.user = foundUser;
                res.json(foundUser);
            } else {
                res.send('invalid password');
            }
        })
    })
};


module.exports = {
    signup,
    login
};