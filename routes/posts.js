const router = require('express').Router();
const controllers = require('../controllers');
const auth = require('../middleware/auth');

// Current Route = '/iomtapi/v1/posts'

// SHOW ALL
router.get('/', auth, controllers.posts.index)
// CREATE
router.post('/', auth, controllers.posts.create)
// SHOW ONE
router.get('/:postid', auth, controllers.posts.show)
// EDIT
router.put('/:postid', auth, controllers.posts.edit)
// DELETE
router.delete('/:postid', auth, controllers.posts.destroy)

module.exports = router;