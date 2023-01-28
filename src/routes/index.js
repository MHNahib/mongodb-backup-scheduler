const homeRoutes = require("./home.routes");
const mongodbBackuproutes = require("./mongodbBackup.routes");
const { notFoundcontroller } = require("../controllers");

const notFoundRoute = notFoundcontroller;

module.exports = {
  homeRoutes,
  mongodbBackuproutes,
  notFoundRoute,
};
