"use strict";

const convict = require("convict");
const mongodbUri = require("mongodb-uri");

convict.addFormat({
  name: "mongo-uri",
  validate: function (val) {
    const parsed = mongodbUri.parse(val);
    mongodbUri.format(parsed);
  },
  coerce: function (urlString) {
    let newUrlString = urlString;
    if (urlString) {
      const parsed = mongodbUri.parse(urlString);
      newUrlString = mongodbUri.format(parsed);
    }
    return newUrlString;
  },
});

let config = convict({
  env: {
    doc: "The application environment.",
    format: ["production", "development", "test"],
    default: "development",
    env: "NODE_ENV",
  },
  app: {
    api_secret: {
      doc: "jwt api secret",
      default: "some dummy key",
      env: "JWT_SECRET",
    },
  },
  mongo: {
    host: {
      uri: {
        doc: "host mongo",
        format: "mongo-uri",
        default: "mongodb://localhost:27017/todo",
        env: "MONGO_TODO_APP_READ_WRITE",
        arg: "mongo_todo_app_read_write",
      },
    },
  },
  port: {
    doc: 'The port this extension will bind to',
    format: 'port',
    default: 3000,
    env: 'PORT',
    arg: 'port',
  },
  log_level: {
    doc: "log level for logger",
    format: String,
    default: "info",
    env: "LOG_LEVEL",
    arg: "log_level",
  },
});

// Perform validation
config.validate({ allowed: "strict" });
config = config.get();

module.exports = config;
