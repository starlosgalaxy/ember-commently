import Ember from 'ember';

const { Controller, run: { debounce } } = Ember;

export default Controller.extend({
  actions: {
    searchUpdated(paramVal) {
      this.set('search', paramVal);
      debounce(this, '_refreshRoute', 300);
    }
  },
  // Tell Route to refresh
  _refreshRoute() {
    this.send('_refreshRoute');
  }
});
