import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    setOneWayValue: function(value) {
      this.set('oneWayValue', value);
    },
    setTwoWayValue: function(value) {
      this.set('twoWayValue', value);
    },
  }
});
