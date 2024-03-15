/* eslint-disable no-unused-vars */
"use strict";

const { ApplicationStaticErrors } = require("./application.error");

const logger = require("../common/logger");
const BaseError = require("./error");
class ErrorResponse {
  constructor(code, message) {
    this.error = true;
    this.code = code;
    this.message = message;
  }
}

function genericErrorHandler(error, req, res, next) {
  logger.error(
    `failed to process request with url :: ${
      req?.url
    } error  :: ${JSON.stringify(error.stack)}`
  );
  let statusCode = 500;
  let errorCode = ApplicationStaticErrors.SOMETHING_WENT_WRONG.errorCode;
  let description = ApplicationStaticErrors.SOMETHING_WENT_WRONG.description;
  if (
    error instanceof BaseError ||
    error?.errorCode &&
      error.statusCode &&
      error.statusCode !== 500 &&
      error?.description
  ) {
    statusCode = error.statusCode;
    errorCode = error.errorCode;
    description = error.description;
  }
  return res.status(statusCode).json(new ErrorResponse(errorCode, description));
}

module.exports = genericErrorHandler;
