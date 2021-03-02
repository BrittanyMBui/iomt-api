const router = require('express').Router();
const db = require('../models');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

// - /user

router.post('/signup', (req, res)=> {
    bcrypt.genSalt(10, (err, salt)=>{
        if (err) throw err;
        bcrypt.hash(req.body.password, salt, (err, hashedPassword) => {
            const newUser = {
                username: req.body.username,
                avatar: req.body.avatar,
                email: req.body.email,
                password: hashedPassword,
            }

            db.User.create(newUser, (err, createdUser) => {
                if (err) throw err;
                req.session.user = createdUser;
                res.json(createdUser);
            })
        })
    })
});

module.exports = router;