const router = require('express').Router();

const authRoutes = require('./authRoutes.js');
const comments = require('./commentsRoutes.js');
const posts = require('./postsRoutes.js');

router.use('/auth', authRoutes);
router.use('/comments', comments);
router.use('/posts', posts);



module.exports = router;