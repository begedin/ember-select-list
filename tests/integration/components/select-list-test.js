import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('select-list', 'Integration | Component | select list', {
  integration: true,
  //needs: ['helper:read-path', 'helper:is-not', 'helper:is-equal-by-path']
});

test('changing value of selection variable from outside changes the selected option', function(assert) {
  assert.expect(2);
  var options = ['Item A', 'Item B', 'Item C'];
  this.set('options', options);
  this.set('selection', 'Item B');

  this.render(hbs`
    {{select-list content=options value=selection}}
  `);

  this.set('selection', 'Item B');
  assert.equal(this.$('select').val(), 'Item B', 'Select box shows the correct value selected');

  this.set('selection', 'Item C');
  assert.equal(this.$('select').val(), 'Item C', 'Select box shows the correct value selected');
});

test('setting initial value with prompt renders with initial value selected', function(assert) {
  assert.expect(1);

  var options = ['Item A', 'Item B', 'Item C'];
  this.set('options', options);
  this.set('selection', 'Item B');

  this.render(hbs`
    {{select-list content=options value=selection prompt='A prompt'}}
  `);

  assert.equal(this.$('select').val(), 'Item B', 'Select box shows the correct value selected');
});

test ('setting initial value without prompt renders with initial value selected', function(assert) {
  assert.expect(1);

  var options = ['Item A', 'Item B', 'Item C'];
  this.set('options', options);
  this.set('selection', 'Item B');

  this.render(hbs`
    {{select-list content=options value=selection}}
  `);

  assert.equal(this.$('select').val(), 'Item B', 'Select box shows the correct value selected');
});

test ('setting no initial value and no prompt renders with first option selected', function(assert) {
  assert.expect(1);

  var options = ['Item A', 'Item B', 'Item C'];
  this.set('options', options);

  this.render(hbs`
    {{select-list content=options value=selection}}
  `);

  assert.equal(this.$('select').val(), 'Item A', 'Select box shows the correct value selected');

});

test ('setting no initial value with prompt renders with prompt option selected', function(assert) {
  assert.expect(2);

  var options = ['Item A', 'Item B', 'Item C'];
  this.set('options', options);

  this.render(hbs`
    {{select-list content=options value=selection prompt='A prompt'}}
  `);

  assert.equal(this.$('select').val(), null, 'Select box value is empty');
  assert.equal(this.$('select option:selected').text().trim(), 'A prompt', 'Select box text shows the prompt selected');
});
