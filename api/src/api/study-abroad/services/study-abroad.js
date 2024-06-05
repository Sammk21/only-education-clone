'use strict';

/**
 * study-abroad service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::study-abroad.study-abroad');
