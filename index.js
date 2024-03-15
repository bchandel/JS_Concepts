'use strict';

require('./app/common/init');
const logger = require("./app/common/logger");
const config = require("./app/config")
const app = require("./app/server");
const port = config.port;

app.listen(port, () => {
    logger.info(`TODO app listening at http://localhost:${port}`)
});