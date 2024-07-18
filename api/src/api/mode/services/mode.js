'use strict';

/**
 * mode service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mode.mode');
