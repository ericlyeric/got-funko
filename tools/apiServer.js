/* eslint-disable import/no-extraneous-dependencies */
const jsonServer = require('json-server');

const server = jsonServer.create();
const path = require('path');

const router = jsonServer.router(path.join(__dirname, 'db.json'));
const serviceConfig = require('../config/urlConfig');

// set default middlewares (logger, static, cors and no-cache)
const middlewares = jsonServer.defaults();

server.use(middlewares);

// to handle POST, PUT, PATCH use body-parser
// use the JSON Server one
server.use(jsonServer.bodyParser);

server.use((req, res, next) => {
  setTimeout(next, 1000);
});

// add createdAt to all POSTS
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now();
  }
  // continue to JSON server router
  next();
});

// use default router
server.use(router);

// start server
const port = serviceConfig.servicePort;
server.listen(port, () => {
  console.log(`JSON server is running on port ${port}`);
});
