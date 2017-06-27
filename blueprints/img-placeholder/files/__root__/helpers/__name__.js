import Ember from 'ember';

export function <%= camelizedModuleName %>(params, hash) {
  return `http://<%= baseUrl %>/${hash.w}/${hash.h}`;
}

export default Ember.Helper.helper(<%= camelizedModuleName %>);