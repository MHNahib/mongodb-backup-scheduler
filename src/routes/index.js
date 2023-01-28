const homeRoutes = require("./home.routes");
const mongodbBackuproutes = require("./mongodbBackup.routes");
const { notFoundcontroller: notFoundRoute } = require("../controllers");

module.exports = {
  homeRoutes,
  mongodbBackuproutes,
  notFoundRoute,
};
