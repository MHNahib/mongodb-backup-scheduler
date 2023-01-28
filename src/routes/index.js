const homeRoutes = require("./home.routes");
const { notFoundcontroller } = require("../controllers");

const notFoundRoute = notFoundcontroller;

module.exports = {
  homeRoutes,
  notFoundRoute,
};
