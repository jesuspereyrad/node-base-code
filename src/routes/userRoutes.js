var express = require('express');
var router = express.Router();
const userController =  require("../controllers/userController");
const basicAuth = require("../helpers/basicAuth");

/// USER ROUTES ///

// GET TEST request for one User.
router.get('/:id', basicAuth, userController.getUserTest);

// // GET TEST USERS. RESPONSE IS MOCKED of all User.
router.get('/', basicAuth, userController.getUsersTest);


module.exports = router;
