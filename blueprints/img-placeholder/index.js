'use strict';
/* eslint-env node */
let normalizeEntityName = require('ember-cli-normalize-entity-name');

module.exports = {
  availableOptions: [
    {
      name: 'base',     // Required
      key: 'baseUrl',        // Optional, default is the camelized name
      description: 'the base url of the img placeholder service',       // Optional
      type: String,             // Required
      default: 'placekitten.com/g',     // Optional, default is undefined
      required: true           // Optional, default is false
    }
  ],
  locals: function(options) {
    // returns custom template variables
    return {
      baseUrl: options.base
    };
  },
  description: 'Generates a helper function.',
  normalizeEntityName(entityName) {
    return normalizeEntityName(entityName);
  }
};