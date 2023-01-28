const { getReasonPhrase } = require("http-status-codes");

const response = (res, code, status, data, message) => {
  if (!message) message = getReasonPhrase(code);

  return res.status(code).json({
    status,
    data,
    message,
  });
};

module.exports = response;
