import Ember from 'ember';

export default Ember.Helper.helper(function([object, path]){
  if (path) {
    if (path.split('.')[0] === 'content') {
      path = path.split('.').slice(1).join('.');
    }
    return Ember.get(object, path);
  } else {
    return object;
  }
});
