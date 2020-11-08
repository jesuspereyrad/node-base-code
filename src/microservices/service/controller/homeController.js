
/**
 * Home Controller to display home site.
 *
 * @param   {Request}          req - The request html payload from the routes
 * @param   {Response}         res - The response httml to the route
 * @returns {null}
 */
exports.home = (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var messengerButton = "<html><head><title>External Service</title></head><body><h1>External Service</h1></body></html>";
  res.write(messengerButton);
  res.end();
};