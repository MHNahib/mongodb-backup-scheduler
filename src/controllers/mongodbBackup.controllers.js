const response = require("../utils/response");
const { StatusCodes } = require("http-status-codes");
const { backupAsGzip } = require("../service/mongodbBackupController.service");

// index controller
const backupAsGzipController = (req, res) => {
  try {
    backupAsGzip(res);
  } catch (error) {
    response(
      res,
      StatusCodes.INTERNAL_SERVER_ERROR,
      false,
      null,
      error.message
    );
  }
};

module.exports = {
  backupAsGzipController,
};
