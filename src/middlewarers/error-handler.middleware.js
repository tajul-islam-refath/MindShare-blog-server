const { logger } = require("../utils/logger");
const errorHandler = (err, _req, res, next) => {
  // console.log("Error--> ", err.stack.split("\n"));
  logger.error(err.stack.split("\n"));
  res.status(err.status || 500).json({
    success: false,
    message: err.message,
    errors: err.errors,
  });
};

module.exports = errorHandler;
