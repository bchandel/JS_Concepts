const logger = require("../common/logger");
const taskService = require("../services/taskService");
const { NonRetryableException } = require("../errors/base.error");
const { ApplicationStaticErrors } = require("../errors/application.error");
const { TaskModel } = require("../models/schema/taskSchema");
const { UserModel } = require("../models/schema/userSchema");

async function create(req, res, next) {
  try {
    logger.info(`TaskController :: create`);
    let response = await taskService.create(req.body, req.user.userId);
    return res.json({message: `Task Created `, data: response});
  } catch (err) {
    console.log(err);
    next(err);
  }
  return false;
}

async function getMyTasks(req, res, next) {
  try {
    logger.info(`TaskController :: getMyTasks`);
    // const {isActive } = req.query;
    // if (!req.query || !req.query.is_active || !(req.query.is_active === "true" || req.query.is_active === "false")) {
    //   throw new NonRetryableException(ApplicationStaticErrors.MISSING_IS_ACTIVE);
    // }
   
    // let getAllUsersResponse = await taskService.getAllUsers(isActive);
    let getAlltasks = await UserModel.find({userName: req.params.userName}).populate('tasks');
    return res.json({
      message: `success`,
      data: getAlltasks,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
  return false;
}

async function getUserData(req, res, next) {
    try {
      logger.info(`Inside getMetaData() with key:${req.params.key} ,:${is_active}`);
      const { userId } = req.query;
      if (!req.query || !req.query.userId || !(req.query.userId === "true" || req.query.userId === "false")) {
        throw new NonRetryableException(ApplicationStaticErrors.MISSING_IS_ACTIVE);
      }
      
      let getUserResponse = await taskService.getUser(userId);
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

async function completeTask(req, res, next){
  try{
    logger.info(`TaskCtrl :: completeTask`);
    const { taskId } = req.query;
    let doneResponse = await taskService.completeTask(taskId);
    return doneResponse;
  }catch(err){
    console.log(err);
    next(err);
  }
  return false;
}

async function deleteTask(req, res, next){
  try{
    logger.info(`TaskCtrl :: deleteTask`);
    const { taskId } = req.query;
    let doneResponse = await taskService.deleteTask(taskId);
    return res.json({message: `Task with ${taskId} is deleted succesfully`});
  }catch(err){
    console.log(err);
    next(err);
  }
  return false;
}

module.exports = {
  create,
  getMyTasks,
  getUserData,
  completeTask,
  deleteTask
};
