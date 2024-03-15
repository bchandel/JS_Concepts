/* eslint-disable no-invalid-this */
"use strict";

const mongoose = require("mongoose");
const mongooseLeanGetters = require("mongoose-lean-getters");

const Schema = mongoose.Schema;
const collectionName = "task";

const TaskSchema = new Schema(
  {  
    taskId: { type: Schema.Types.String, unique: true },
    title: { type: Schema.Types.String, required: true },
    description: { type: Schema.Types.String, required: true },
    isDone: { type: Schema.Types.Boolean, default: false },
    last_modified_at: { type: Date, default: Date.now },
  },
  {
    strict: false,
    toJSON: { getters: true },
    toObject: { getters: true },
    optimisticConcurrency: true,
  }
);

TaskSchema.pre("save", async function (next) {
    if (!this.isNew) {
      return next();
    }
  
    try {
      const latestArtist = await this.constructor.aggregate([
        {
          $project: {
            taskId: 1,
            numericPart: { $toInt: { $substr: ["$taskId", 1, -1] } }
          }
        },
        { $sort: { numericPart: -1 } },
        { $limit: 1 }
      ]);
    
      if (latestArtist && latestArtist.length > 0) {
        const latestId = latestArtist[0].taskId;
        const numericPart = parseInt(latestId.substring(1), 10);
        const newNumericPart = numericPart + 1;
        const newId = "T" + newNumericPart;
        this.taskId = newId;
      } else {
        this.taskId = "T1";
      }
    
      return next();
    } catch (error) {
      return next(error);
    }
});

TaskSchema.pre("findOneAndUpdate", function () {
  this.updateOne({}, { $inc: { __v: 1 } });
});

TaskSchema.plugin(mongooseLeanGetters);
  

const TaskModel = mongoose.model(collectionName, TaskSchema);

module.exports = { TaskModel };
