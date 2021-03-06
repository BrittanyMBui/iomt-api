const router = require('express').Router();
const controllers = require('../controllers');
const auth = require('../middleware/auth');

// Current Path = '/iomtapi/v1/users'

// CREATE
router.post ('/', controllers.users.create);
// PROFILE
router.post('/profile', auth, controllers.users.getProfile);

module.exports = router;