const router = require('express').Router();

const htmlRoutes = require('./home-routes');

router.use('/', htmlRoutes);

module.exports = router;