const ApplicationStaticErrors = {
  SOMETHING_WENT_WRONG: {
    errorCode: "TODO-101",
    statusCode: 500,
    description: "Something went wrong, please try again later",
  },
  UASER_ALREADY_EXIST: {
    errorCode: "TODO-102",
    statusCode: 400,
    description: `UserName is already exist!`,
  },
  UN_AUTHORIZED: {
    errorCode: "TODO-103",
    statusCode: 401,
    description: "Un-Authorized user!",
  },
  MISSING_IS_ACTIVE: {
    errorCode: "TODO-104",
    statusCode: 400,
    description: "Missing is_active",
  },
};



module.exports = { ApplicationStaticErrors };
