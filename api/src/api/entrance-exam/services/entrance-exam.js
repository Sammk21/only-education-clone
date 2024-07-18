'use strict';

/**
 * entrance-exam service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::entrance-exam.entrance-exam');
