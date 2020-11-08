const {mongoHelper} = require('./mongoHelper.js')
const basicAuth = require('./basicAuth.js')

/** Helpers
 * 
 * Wrapper functions for microservices calls
 * 
 */
module.exports = {
    mongoHelper,
    basicAuth
}