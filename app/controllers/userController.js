const logger = require("../common/logger");
const userService = require("../services/userService");
const { NonRetryableException } = require("../errors/base.error");
const { ApplicationStaticErrors } = require("../errors/application.error");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config');

async function create(req, res, next) {
  try {
    logger.info(`UserController :: create`);
    let response = await userService.create(req.body);
    return res.json({message: `user Created `, data: response});
  } catch (err) {
    console.log(err);
    next(err);
  }
  return false;
}

async function getAllUsersData(req, res, next) {
  try {
    logger.info(`UserController :: getAllUsersData`);
    const {isActive } = req.query;
    if (!req.query || !req.query.is_active || !(req.query.is_active === "true" || req.query.is_active === "false")) {
      throw new NonRetryableException(ApplicationStaticErrors.MISSING_IS_ACTIVE);
    }
   
    let getAllUsersResponse = await userService.getAllUsers(isActive);
    return res.json({
      message: `success`,
      data: getAllUsersResponse,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
  return false;
}

async function getUserData(req, res, next) {
    try {
      logger.info(`UserController :: getUserData`);
      const { userName } = req.params;
      
      let getUserResponse = await userService.getUser(userName);
      return res.json({
        message: `success`,
        data: getUserResponse,
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
    return false;
}

async function logInUser(req, res, next) {
    try {
      logger.info(`UserController :: logInUser`);
      const { userName, password } = req.body;
      
      let user = await userService.getUser(userName);
      if (!user) {
        return res.status(401).json({ error: 'Invalid username or password' });
      }
  
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ error: 'Invalid username or password' });
      }
  
      // Create and send JWT token
      const token = jwt.sign({ userId: user._id }, config.app.api_secret);
      return res.status(200).json({
        message: `success`,
        token: token,
        data: user,
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
    return false;
}


module.exports = {
  create,
  getAllUsersData,
  getUserData,
  logInUser
};
