/// <reference types="cypress" />
const log4js = require('log4js');
const { loggerConfig } = require('../../config/logger.conf');


/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  log4js.configure(loggerConfig);
  const logger = log4js.getLogger('default');
  on('task', {
    infoLog(message) {
      logger.info(message);
      return null;
    }
  })
}
