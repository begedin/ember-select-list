import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    setSelection: function(value) {
      this.set('value', value);
    }
  }
});
