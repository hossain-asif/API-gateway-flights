const express = require('express');
const userRoutes = require('./user-routes');

const { InfoController } = require('../../controllers');

const router = express.Router();

router.use('/user', userRoutes);




router.get('/info',InfoController.info);

module.exports = router;
