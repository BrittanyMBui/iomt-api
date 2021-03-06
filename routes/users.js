const router = require('express').Router();
const controllers = require('../controllers');

// Current Path = '/iomtapi/v1/users'

// CREATE
router.post ('/', controllers.users.create);
// PROFILE
router.post('/profile', controllers.users.getProfile);

module.exports = router;