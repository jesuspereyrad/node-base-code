var userService = require('../services/userService');

// Example of a controller to handle user functions.
exports.getUserTest = function(req, res) {
    const { name } = req.params;
    if (name) {
        userService.getUsers().then(users => {
            return res.status(200).json(users);
        }).catch(error => {
            console.error("Not users in the database", error)
            return res.status(500).send("Not users in the database")
        })
    } else {
        return res.status(500).send("Missing params")
    }
    
};

// Return mock users
exports.getUsersTest = function(req, res) {
    userService.getUsers(req.params.id).then(users => {
        return res.status(200).json(users);
    }).catch(error => {
        console.error("DB user is empty", error)
        return res.status(500).send("DB user is empty")
    })
};