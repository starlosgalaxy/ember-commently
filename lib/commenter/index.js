/* eslint-env node */

const Filter = require('broccoli-filter');

'use strict';

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
MyFilter.prototype.targetExtension = 'js';

module.exports = {
  name: 'commenter',

  isDevelopingAddon: function() {
    return true;
  },

  postprocessTree: function(type, tree) {
    return new MyFilter(tree, {});
  }
};