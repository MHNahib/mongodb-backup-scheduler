const response = require("../utils/response");
const { StatusCodes } = require("http-status-codes");

// index controller
const notFoundcontroller = (req, res) => {
  response(res, StatusCodes.NOT_FOUND, false, { say: "404" }, "Not found");
};

module.exports = notFoundcontroller;
