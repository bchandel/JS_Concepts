'use strict'

const bcrypt = require('bcrypt');
const { UserModel } = require('../models/schema/userSchema');
const jwt = require('jsonwebtoken');
const config = require('../config');
const { NonRetryableException } = require("../errors/base.error");
const { ApplicationStaticErrors } = require("../errors/application.error");

exports.isuserExist = async (req, res, next) => {
    try {
      const { userName, password } = req.body;
      const existingUser = await UserModel.findOne({ userName });
      if (existingUser) {
        throw new NonRetryableException(ApplicationStaticErrors.UASER_ALREADY_EXIST);
      }
      const hashedPassword = await bcrypt.hash(password, 10); 
      req.body.password = hashedPassword;
      next();
    
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
};


exports.authenticate = async(req, res, next)=> {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) {
    throw new NonRetryableException(ApplicationStaticErrors.UN_AUTHORIZED);
  }

  jwt.verify(token, config.app.api_secret, (err, user) => {
    if (err) return res.sendStatus(403); // Forbidden
    req.user = user;
    next();
  });
}
