import Ember from 'ember';

export default Ember.Helper.helper(function([object, path]){
  if (path) {
    return Ember.get(object, path);
  } else {
    return object;
  }
});
