/* eslint-env node */
const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const Filter = require('broccoli-filter');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
  });

  function MyFilter(inputNode) {
    Filter.call(this, inputNode);
  }

  MyFilter.prototype = Object.create(Filter.prototype);

  MyFilter.prototype.processString = function(existingString) {
    let prepend = `/*
    * vendor.js
    * (c) 2016 BATOSI175 all rights served
    * generated at: ${(new Date()).toISOString()}
    */`;
    return prepend + existingString;
  };

  MyFilter.prototype.extensions = ['js'];
  MyFilter.prototype.targetExtensions = ['js'];

  return new MyFilter(app.toTree());
};
