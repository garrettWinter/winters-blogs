const router = require('express').Router();

const authRoutes = require('./authRoutes.js');
const comments = require('./commentsRoutes.js');

router.use('/auth', authRoutes);
router.use('/comments', comments);



module.exports = router;