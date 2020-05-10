const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/auth/google',
    createProxyMiddleware({
      target: 'https://caramba-backend.herokuapp.com',
      router: {
        'localhost:3000/': 'http://localhost:5000',
      },
    }),
  );
};
