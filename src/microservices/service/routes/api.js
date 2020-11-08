const controller =  require("../controller");
var express = require('express');
var router = express.Router();

/// EXTERNAL SERVICE ROUTES ///

// Home wrapper
router.get('/', controller.homeController.home);


module.exports = router;
