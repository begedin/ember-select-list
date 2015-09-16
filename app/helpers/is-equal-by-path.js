import Ember from 'ember';

export default Ember.Helper.helper(function([leftSide, rightSide, path]) {
  if (path) {
    return Ember.get(leftSide, path) === rightSide;
  } else {
    return leftSide === rightSide;
  }
});
