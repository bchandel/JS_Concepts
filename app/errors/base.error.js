const BaseError = require("./error");

class RetryableException extends BaseError {
  /**
   *
   * @param {{errorCode: string, description: string, statusCode: number}} error
   *
   */
  constructor(error) {
    super(error.statusCode, error.errorCode, error.description);
  }
}

class NonRetryableException extends BaseError {
  /**
   *
   * @param {{errorCode: string, description: string, statusCode: number}} error
   */
  constructor(error) {
    super(error.statusCode, error.errorCode, error.description);
  }
}

module.exports = { RetryableException, NonRetryableException };
