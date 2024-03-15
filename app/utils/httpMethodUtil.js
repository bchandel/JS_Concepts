const { HTTP_STATUS } = require("../common/constants");

exports.methodNotAllowed = (req, res) => res.status(HTTP_STATUS.METHOD_NOT_FOUND).send();