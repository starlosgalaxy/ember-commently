import Ember from 'ember';

const { Controller, inject } = Ember;
import { default as math, PI } from 'math';

export default Controller.extend({
  currentUser: inject.service()
});
