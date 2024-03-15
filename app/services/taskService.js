const { createTask, complateTaskModel, deleteTaskModel } = require("../models/taskModel");
const logger = require("../common/logger");


async function create(body, currentUserId) {
  logger.info(`TaskService :: create`);
  let response = await createTask(body, currentUserId);
  return  {id: response?.taskId}
}

async function completeTask(taskId){
  logger.info(`TaskService :: completeTask`);
  let response = await complateTaskModel(taskId);
  console.log("response", response)
  return  response;
}

async function deleteTask(taskId){
  logger.info(`TaskService :: deleteTask`);
  let response = await deleteTaskModel(taskId);
  console.log("response", response)
  return  response;
}



module.exports = { create, completeTask, deleteTask };
