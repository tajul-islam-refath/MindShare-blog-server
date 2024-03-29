const badRequest = (msg = "Bad Request", errors = null) => {
  const error = new Error(msg);
  error.status = 400;
  if (errors) error.errors = errors;
  return error;
};

const authenticationError = (msg = "Authentication Failed") => {
  const error = new Error(msg);
  error.status = 401;
  return error;
};

const notFound = (msg = "Resource not found") => {
  const error = new Error(msg);
  error.status = 404;
  return error;
};

const authorizationError = (msg = "Permission Denied") => {
  const error = new Error(msg);
  error.status = 403;
  return error;
};

const serverError = (msg = "Internal Server Error") => {
  const error = new Error(msg);
  error.status = 500;
  return error;
};

module.exports = {
  notFound,
  badRequest,
  serverError,
  authenticationError,
  authorizationError,
};
