const { createUser, getAllusersData, getUserData } = require("../models/userModel");
const logger = require("../common/logger");


async function create(body) {
  logger.info(`UserService :: create`);
  response = await createUser(body);
  return  {id: response?._id}
}

async function getUser(userId) {
    logger.info(`UserService :: getUser`);
    response = await getUserData(userId);
    return  response
}

async function getAllUsers(isActive) {
    logger.info(`UserService :: getAllUsers`);
    response = await getAllusersData(isActive);
    return  response
}


module.exports = { create, getUser , getAllUsers };