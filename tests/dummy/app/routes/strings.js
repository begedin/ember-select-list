import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return ['Item A', 'Item B', 'Item C'];
  }
});
