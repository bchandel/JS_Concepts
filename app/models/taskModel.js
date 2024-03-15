/* eslint-disable require-unicode-regexp */
const logger = require("../common/logger");
const { TaskModel } = require("./schema/taskSchema");
const { UserModel } = require("./schema/userSchema");

function populateCreateData(data) {
  return {
    title: data?.title,
    description: data.description
  };
}

async function createTask(taskData, userId) {
  logger.info(`TaskModel :: createTask`);
  const taskDTO = populateCreateData(
    taskData
  );
  let taskResponse = await TaskModel.create(taskDTO);
  await UserModel.findOneAndUpdate(
    { _id: userId },
    { $push: { tasks: taskResponse._id } },
    { new: true },
  );
  return taskResponse;
}

async function complateTaskModel(taskId) {
  logger.info(`TaskModel :: complateTask`);
  
  let complateTaskResp = await TaskModel.updateOne({taskId: taskId}, {$set : {isDone: true}});
  return complateTaskResp;
}

async function deleteTaskModel(taskId) {
  logger.info(`TaskModel :: deleteTaskModel`);
  
  /* TODO:: delete the task from user's collections */
  let deletTaskResp = await TaskModel.findOneAndRemove({taskId: taskId});
  return deletTaskResp;
}

module.exports = {
  createTask,
  complateTaskModel,
  deleteTaskModel
};
