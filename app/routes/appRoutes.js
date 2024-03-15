"use strict";
const express = require("express");
const userUtil = require("../utils/userUtils.js");
const userCtrl = require("../controllers/userController.js");
const taskCtrl = require("../controllers/taskController.js");
const httpMethodutil = require('../utils/httpMethodUtil.js');

const router = express.Router({});
// REst API Endpoint --> /api/v1/user/sign-up
router.
  route("/user/sign-up").  
  post(userUtil.isuserExist, userCtrl.create).
  all(httpMethodutil.methodNotAllowed);

router.
  route("/login").
  post(userCtrl.logInUser).
  all(httpMethodutil.methodNotAllowed);


router.
  route("/user/:userName").
  get(userUtil.authenticate, userCtrl.getUserData).
  all(httpMethodutil.methodNotAllowed);

router.
  route("/user").
  get(userUtil.authenticate, userCtrl.getAllUsersData).
  all(httpMethodutil.methodNotAllowed);

router.
  route("/task/add-todo").
  post(userUtil.authenticate, taskCtrl.create).
  all(httpMethodutil.methodNotAllowed);

router.
  route("/task/get-my-task/:userName").
  get(userUtil.authenticate, taskCtrl.getMyTasks).
  all(httpMethodutil.methodNotAllowed);

  // 1. Mark task is done isDone flag sets as true
  // 2. delete the task 

router.
  route("/task/complete-task"). // api/v1/task/complete-task
  put(userUtil.authenticate, taskCtrl.completeTask).
  all(httpMethodutil.methodNotAllowed);

router.
  route("/task/delete-task"). // api/v1/task/complete-task
  delete(userUtil.authenticate, taskCtrl.deleteTask).
  all(httpMethodutil.methodNotAllowed);

  

module.exports = router;
