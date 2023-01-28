const homecontroller = require("./home.controllers");
const notFoundcontroller = require("./notFound.controllers");
const { backupAsGzipController } = require("./mongodbBackup.controllers");

module.exports = {
  homecontroller,
  notFoundcontroller,
  backupAsGzipController,
};
