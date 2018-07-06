import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    setOneWayValue: function(value) {
      this.set('oneWayValue', value);
    },
    setTwoWayValue: function(value) {
      this.set('twoWayValue', value);
    },
  }
});
