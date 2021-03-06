const router = require('express').Router();
const controllers = require('../controllers')

// CURRENT PATH '/iomtapi/v1/auth'

// LOGIN
router.post('/login', controllers.auth.login)

module.exports = router;