const router = require('express').Router();
const controllers = require('../controllers');

// CREATE
router.post('/', controllers.posts.create)
router.get('/:postid', controllers.posts.show)
module.exports = router;