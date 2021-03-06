const router = require('express').Router();
const controllers = require('../controllers');

// Current Path = '/iomtapi/v1/users'

// CREATE
router.post ('/', controllers.users.create);

module.exports = router;