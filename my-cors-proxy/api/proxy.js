const corsAnywhere = require('cors-anywhere');

const proxy = corsAnywhere.createServer({
  originWhitelist: [], // Allow all origins (you can specify an array of allowed origins)
  requireHeader: ['origin', 'x-requested-with'],
  removeHeaders: ['cookie', 'cookie2']
});

module.exports = (req, res) => {
  // Strip the "/api/proxy" part of the URL
  req.url = req.url.replace('/api/proxy', '');

  // Let the proxy handle the request
  proxy.emit('request', req, res);
};
