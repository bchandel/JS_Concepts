/* eslint-disable no-invalid-this */
"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const collectionName = "user";

// 1 TO Many user can have many task 
const UserSchema = new Schema(
  {
    name: { type: Schema.Types.String, required: true },
    userName: { type: Schema.Types.String, required: true, unique: true },
    password: { type: Schema.Types.String, required: true},
    isActive: { type: Schema.Types.Boolean, default: true },
    tasks :[{
      type: Schema.Types.ObjectId, 
      ref: 'task'
    }],
    lastModifiedAt: { type: Date, default: Date.now }
  }
);


const UserModel = mongoose.model(collectionName, UserSchema);

module.exports = { UserModel };
