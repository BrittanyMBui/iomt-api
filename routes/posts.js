const router = require('express').Router();
const controllers = require('../controllers');

// SHOW ALL
router.get('/', controllers.posts.index)
// CREATE
router.post('/', controllers.posts.create)
// SHOW ONE
router.get('/:postid', controllers.posts.show)
module.exports = router;