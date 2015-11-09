import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'select',

  // possible passed-in values with their defaults:
  content: null,
  prompt: null,
  optionValuePath: null,
  optionLabelPath: null,
  required: false,
  title: null,
  action: Ember.K, // action to fire on change
  tabindex: -1,
  disabled: null,

  attributeBindings: ['tabindex', 'required', 'title', 'disabled'],

  // shadow the passed-in `value` to avoid
  // leaking changes to it via a 2-way binding
  _selection: Ember.computed.reads('value'),

  didInitAttrs() {
    this._super(...arguments);
    if (!this.get('content')) {
      this.set('content', []);
    }
  },

  change() {
    const selectEl = this.element;
    const selectedIndex = selectEl.selectedIndex;
    const content = this.get('content');

    // decrement index by 1 if we have a prompt
    const hasPrompt = !!this.get('prompt');
    const contentIndex = hasPrompt ? selectedIndex - 1 : selectedIndex;

    const selection = content.objectAt(contentIndex);

    const value = this.attrs.optionValuePath ? Ember.get(selection, this.get('optionValuePath')) : selection;

    // set the local, shadowed selection to avoid leaking
    // changes to `selection` out via 2-way binding
    this.set('_selection', value);

    const changeCallback = this.get('action');
    changeCallback(value);
  }
});
