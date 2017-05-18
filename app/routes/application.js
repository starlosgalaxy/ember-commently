import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import { default as math, PI } from 'math';

const { Route, inject, Logger, getOwner } = Ember;

export default Route.extend(ApplicationRouteMixin, {
  session: inject.service(),
  currentUser: inject.service(),
  actions: {
    logout() {
      this.get('session').invalidate();
    }
  },
  beforeModel() {
    this._super(...arguments);
    Logger.log(math, PI);
    if (this.get('session.isAuthenticated')) {
      return this.get('currentUser').loadUserInfo();
    }
  },
  setupController(controller) {
    this._super(...arguments);
    let locObj = getOwner(this).lookup('data:location');
    let reqObj = getOwner(this).lookup('data:request');
    controller.set('loc', locObj);
    controller.set('req', reqObj);
  }
});
