const router = require('express').Router();
const userRoutes = require('./userRoute');
const thoughtRoutes = require('./thoughtsRoute.js');


router.use('/thoughts', thoughtsRoute);

router.use('/users', userRoute);

module.exports = router;