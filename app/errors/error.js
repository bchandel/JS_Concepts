class BaseError extends Error {
  constructor(statusCode, errorCode, description) {
    super(description);
    Object.setPrototypeOf(this, new.target.prototype);
    this.statusCode = statusCode;
    this.description = description;
    this.errorCode = errorCode;
  }
}
  
module.exports = BaseError