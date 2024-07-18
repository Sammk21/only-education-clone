'use strict';

/**
 * top-course service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::top-course.top-course');
