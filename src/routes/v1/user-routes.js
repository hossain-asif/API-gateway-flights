const express = require('express');
const { UserController } = require('../../controllers');

const router = express.Router();

// /api/v1/user POST
router.post('/signup',
    UserController.signup);


// /api/v1/user POST
router.post('/signin',
    UserController.signin);


// /api/v1/user POST
router.post('/role',
    UserController.addRoleToUser);

module.exports = router;