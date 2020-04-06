const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/gif',
    createProxyMiddleware({
      target: process.env.REACT_APP_DEV_PROXY,
      changeOrigin: true,
      logLevel: 'debug',
    })
  );
};
