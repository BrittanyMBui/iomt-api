const db = require('../models');
const bcrypt = require('bcryptjs');

// CREATE USER
async function create(req, res) {
    const { username, email, password } = req.body;

    if(!username || !email || !password) {
        return res.status(400).json({status: 400, message: 'All Fields Are Required'});
    }

    try {
        const foundUser = await db.User.findOne({ email });
        if (foundUser) {
            console.log(`User exits at ${foundUser}`);
            return res.status(400).json({status: 400, message: 'Email already in use'});
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = await db.User.create({...req.body, password: hashedPassword});
        res.json(newUser);
    } catch (err) {
        console.log(err)
        return res.status(500).json({status: 500, error: 'Something went wrong, please try again'});
    }
};

async function getProfile(req, res) {
    try {
        const user = await db.User.findById(req.currentUserId);
        return res.json({status: 200, profile: user})
    } catch (err) {
        console.log(err)
        return res.status(500).json({status: 500, error: 'Something went wrong, please try again.'});
    }
}

module.exports = {
    create,
    getProfile
};