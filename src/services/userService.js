const userModel = require('../models/userModel');

/**
 * Create user in our database
 *
 * @param   {Object}          payload - User attributes.
 * @returns {Object<userModel>}
 */
exports.createUser = (payload) => {
  // Returning user from the db in case we have a connection with the DB
  // return userModel.find()
  // return userModel.create({...payload, lastUpdate: Date.now()})
}

/**
 * Update user from Facebook with new session_id in the Database.
 *
 * @param   {Object<userModel>}          user - User entry from database.
 * @returns {String}
 */
exports.getUsers = () => {
  // Returning user from the db in case we have a connection with the DB
  // return userModel.find()

  const mockusers = [
    {
      name: "jhon",
      lastName: "Doe",
      id: "0",
      role: "user"
    },
    {
      name: "Jane",
      lastName: "Doe",
      id: "1",
      role: "admin"
    }
  ]
  // Mock
  return new Promise((resolve, reject) => {
    if(true) {
      resolve(mockusers)
    } else {
      reject("Error")
    }
  })
  
}