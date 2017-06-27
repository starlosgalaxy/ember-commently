import Ember from 'ember';

export function catUrl(params, hash) {
  return `http://placekitten.com/g/${hash.w}/${hash.h}`;
}

export default Ember.Helper.helper(catUrl);