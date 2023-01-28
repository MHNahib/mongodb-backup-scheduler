const response = require("../utils/response");
const { StatusCodes } = require("http-status-codes");

// index controller
const homecontroller = (req, res) => {
  response(res, StatusCodes.ACCEPTED, true, { say: "Hello Nahib" }, "Success");
};

module.exports = homecontroller;
