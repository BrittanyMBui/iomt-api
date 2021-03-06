const db = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

async function login(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({status: 400, message: 'All fields are required'})
    }

    try {
        const foundUser = await db.User.findOne({ email });
        if (!foundUser) {
            return res.status(400).json({status: 400, error: 'Email or password is incorrect'})
        }

        const isMatch = await bcrypt.compare(password, foundUser.password);
        if (!isMatch) {
            console.log('Passwords do not match')
            return res.status(400).json({status: 400, error: 'Invalid email or password'})
        }

        const payload = { userId: foundUser._id };
        const secret = process.env.JWT_SECRET;
        const exp = { expiresIn: '30d' };

        const token = await jwt.sign(payload, secret, exp);

        res.json({status: 200, token});
    } catch (err) {
        console.log(err)
        return res.status(500).json({status: 500, error: 'Something went wrong, please try again'});
    }
};

function verify(req, res) {
    res.json({status: 200, userId: req.currentUserId})
};


module.exports = {
    login,
    verify
}