import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [
     { label: 'Item A', value: 'item-a' },
     { label: 'Item B', value: 'item-b' },
     { label: 'Item C', value: 'item-c' }
    ];
  }
});
