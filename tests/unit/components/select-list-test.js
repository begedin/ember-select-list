import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('select-list', {
  needs: ['helper:read-path', 'helper:is-not', 'helper:is-equal-by-path']
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render();
  assert.equal(this.$()[0].tagName, 'SELECT', 'Component is rendered with select tag name');
});

test('it renders with no options when no content is provided', function(assert) {
  assert.expect(1);

  this.render();
  assert.equal(this.$('option').length, 0, 'Component is rendered with no options');
});

test('it renders with x options when content of length x is provided', function(assert) {
  assert.expect(3);

  var component = this.subject();

  this.render();
  Ember.run(function() {
    component.set('content', ['a']);
  });
  assert.equal(this.$('option').length, 1, 'Component is rendered with one option');

  Ember.run(function() {
    component.set('content', ['a', 'b']);
  });
  assert.equal(this.$('option').length, 2, 'Component is rendered with two options');

  Ember.run(function() {
    component.set('content', ['a', 'b', 'c']);
  });
  assert.equal(this.$('option').length, 3, 'Component is rendered with three options');
});

test('it renders with x+1 options when content of length x is provided', function(assert) {
  assert.expect(3);

  var component = this.subject({ prompt: 'test-prompt' });

  this.render();
  Ember.run(function() {
    component.set('content', ['a']);
  });
  assert.equal(this.$('option').length, 2, 'Component is rendered with one option and a prompt on top');

  Ember.run(function() {
    component.set('content', ['a', 'b']);
  });
  assert.equal(this.$('option').length, 3, 'Component is rendered with two options and a prompt on top');

  Ember.run(function() {
    component.set('content', ['a', 'b', 'c']);
  });
  assert.equal(this.$('option').length, 4, 'Component is rendered with three options and a prompt on top');
});

test('it renders prompt correctly', function(assert) {
  assert.expect(4);

  this.subject({ prompt: 'test-prompt' });

  this.render();

  assert.equal(this.$('option').length, 1, 'The prompt option is present');
  assert.equal(this.$('option').attr('value'), undefined, 'The prompt option has no value assigned to it');
  assert.equal(this.$('option').text().trim(), 'test-prompt', 'The prompt option renders the correct text');
  assert.equal(this.$('option').attr('disabled'), 'disabled', 'The prompt option is disabled');
});

test('it sets both value and text to item when content of simple strings is provided', function(assert) {
  assert.expect(2);

  var component = this.subject();
  this.render();

  Ember.run(function() {
    component.set('content', ['item']);
  });

  assert.equal(this.$('option').attr('value'), 'item', 'The value of the option is assigned to the content item value');
  assert.equal(this.$('option').text().trim(), 'item', 'The text of the option is assigned to the content item value');
});
