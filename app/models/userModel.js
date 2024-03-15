/* eslint-disable require-unicode-regexp */
const logger = require("../common/logger");
const { UserModel } = require("./schema/userSchema");

function populateCreateData(data) {
  return {
    name: data?.name,
    userName: data.userName,
    password: data.password
  };
}

async function createUser(userData) {
  logger.info(`UserModel :: createUser`);
  const userDTO = populateCreateData(
    userData
  );
  let userResponse = await UserModel.create(userDTO); // save
  return userResponse;
}

async function getUserData(userName) {
  logger.info(`UserModel :: getUserData :: get user Data for userName ${userName}`);
  const getUserResponse = await UserModel.findOne({
    userName: userName
  });

  return getUserResponse;

}


async function getAllusersData(is_active) {
  logger.info(`UserModel :: getAllusersData `);
  let getUserResponse = await UserModel.find({isActive: is_active});
  return getUserResponse;

}


module.exports = {
  createUser,
  getUserData,
  getAllusersData,
  populateCreateData
};
