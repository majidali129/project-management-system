export class apiError extends Error {
  constructor(statusCode, message, errors = [], stack = '') {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.errors = errors;
    this.data = null

    if (stack) {
      this.stack = stack
    } else {
      Error.captureStackTrace(this, this.constructor);
    }

  }
}