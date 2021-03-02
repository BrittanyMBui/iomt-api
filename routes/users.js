const router = require('express').Router();
const controllers = require('../controllers');

// Current Path = '/users'

// SIGNUP
router.post ('/signup', controllers.users.signup);

// LOGIN
router.post ('/login', controllers.users.login);

// LOGOUT

// DELETE
module.exports = router;