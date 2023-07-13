const express = require('express');
const verifyRoles = require('../middleware/VerifyRoles');
const ROLES_LIST = require('../config/roles_list');
const router = express.Router();
const usersController = require('../controlles/userController')

router.route('/')
    .get(usersController.getAllUsers)
    //.get(verifyRoles(ROLES_LIST.Admin), usersController.getAllUsers)
    .delete(verifyRoles(ROLES_LIST.Admin), usersController.deleteUser);

router.route('/:id')
    .get(verifyRoles(ROLES_LIST.Admin), usersController.getUser);

module.exports = router;