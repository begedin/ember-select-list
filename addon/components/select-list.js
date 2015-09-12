import Ember from 'ember';

export default Ember.Component.extend({
  content: null,
  prompt: null,

  tagName: 'select',

  optionValuePath: null,
  optionLabelPath: null,
  action: Ember.K, // action to fire on change

  // shadow the passed-in `selection` to avoid
  // leaking changes to it via a 2-way binding
  _selection: Ember.computed.reads('selectedValue'),

  // we more often use two-way behavior, so oneWay is initially
  oneWay: false,
  twoWay: Ember.computed.not('oneWay'),

  init: function() {
    this._super(...arguments);
    if (!this.get('content')) {
      this.set('content', []);
    }
  },

  didInsertElement: function() {

    const hasPrompt = !!this.get('prompt');

    if (!hasPrompt) {
      const content = this.get('content');
      const selection = content[0];
      this.setSelection(selection);
    }
  },

  setSelection: function(selection) {
    // set the local, shadowed selection to avoid leaking
    // changes to `selection` out via 2-way binding
    this.set('_selection', selection);

    if (this.get('twoWay')) {
      this.set('value', selection);
    }
  },

  change: function() {
    const selectEl = this.element;
    const selectedIndex = selectEl.selectedIndex;
    const content = this.get('content');

    // decrement index by 1 if we have a prompt
    const hasPrompt = !!this.get('prompt');
    const contentIndex = hasPrompt ? selectedIndex - 1 : selectedIndex;

    const selection = content[contentIndex];

    this.setSelection(selection);

    const changeCallback = this.get('action');
    changeCallback(selection);
  }
});
