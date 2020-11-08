var express = require('express');
var router = express.Router();
const userRoutes = require("./userRoutes");

/** Routes
 * 
 * Route handle the communication between the outside world and the api
 * 
 */

// All the routes inside userroutes will have /user/ as prefix Ex. localhost/user/id
router.use('/user/', userRoutes);


module.exports = router;
