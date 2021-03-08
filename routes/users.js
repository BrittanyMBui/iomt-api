const router = require('express').Router();
const controllers = require('../controllers');
const auth = require('../middleware/auth');

// Current Path = '/iomtapi/v1/users'

// CREATE
router.post ('/', controllers.users.create);
// PROFILE
router.get('/profile', auth, controllers.users.getProfile);
// DELETE ACCOUNT
router.delete('/', auth, controllers.users.deleteUser);

module.exports = router;