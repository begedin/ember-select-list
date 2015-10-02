import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('select-list', 'Integration | Component | select list', {
  integration: true,
  //needs: ['helper:read-path', 'helper:is-not', 'helper:is-equal-by-path']
});

test('selection change propagates down into the component', function(assert) {
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

test('initial selected value can be set alongside prompt', function(assert) {
  assert.expect(1);

  var options = ['Item A', 'Item B', 'Item C'];
  this.set('options', options);
  this.set('selection', 'Item B');

  this.render(hbs`
    {{select-list content=options value=selection prompt='A prompt'}}
  `);

  assert.equal(this.$('select').val(), 'Item B', 'Select box shows the correct value selected');
});

test ('initial value can be set without prompt', function(assert) {
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

test ('setting no initial value with prompt renders with prompt option displayed as selected, but no actual value', function(assert) {
  assert.expect(2);

  var options = ['Item A', 'Item B', 'Item C'];
  this.set('options', options);

  this.render(hbs`
    {{select-list content=options value=selection prompt='A prompt'}}
  `);

  assert.equal(this.$('select').val(), null, 'Select box value is empty');
  assert.equal(this.$('select option:selected').text().trim(), 'A prompt', 'Select box text shows the prompt selected');
});

test('when no action, changing dropdown value doesn\'t affect value of parent variable', function(assert) {
  assert.expect(2);

  var options = ['Item A', 'Item B', 'Item C'];
  this.set('options', options);
  this.set('selection', 'Item B');

  this.render(hbs`
    {{select-list content=options value=selection prompt='A prompt'}}
  `);

  this.$('select').val('Item A');
  assert.equal(this.$('select').val(), 'Item A', 'Select box value is set to first element');
  assert.equal(this.get('selection'), 'Item B', 'Selection variable did not change');
});

test('change of option triggers action', function(assert) {
  assert.expect(2);

  var options = ['Item A', 'Item B', 'Item C'];
  this.set('options', options);
  this.set('selection', 'Item B');

  this.render(hbs`
    {{select-list content=options value=selection prompt='A prompt' action=changed}}
  `);

  this.set('changed', function(value) {
    assert.equal(value, 'Item A');
  });

  this.$('select').val('Item A');
  this.$('select').change();
  assert.equal(this.$('select').val(), 'Item A', 'Select box value is set to first element');
});

test('prompt is dynamic', function(assert) {
  var options = [];
  this.set('options', options);
  this.set('prompt', 'First prompt');

  this.render(hbs`
    {{select-list content=options value=selection prompt=prompt}}
  `);

  assert.equal(this.$('select option:selected').text().trim(), 'First prompt', 'Prompt is correctly set to initial value');

  this.set('prompt', 'Second prompt');
  assert.equal(this.$('select option:selected').text().trim(), 'Second prompt', 'Prompt change propagates down');
});

test('prompt is one way', function(assert) {
  var options = [];
  this.set('options', options);
  this.set('prompt', 'First prompt');

  this.render(hbs`
    {{select-list content=options value=selection prompt=prompt}}
  `);

  assert.equal(this.$('select option:selected').text().trim(), 'First prompt', 'Prompt is correctly set to initial value');

  this.$('select option:selected').val('Second prompt');
  assert.equal(this.$('select option:selected').text().trim(), 'First prompt', 'Prompt change does not propagate up');
});

test('binds properly to `tabindex` attribute', function(assert) {
  var options = ['Item A', 'Item B', 'Item C'];
  this.set('options', options);
  this.set('tabindex', 2);

  this.render(hbs`
    {{select-list content=options value=selection tabindex=tabindex}}
  `);

  assert.equal(this.$('select').attr('tabindex'), 2);
});

test('binds properly to `required` attribute', function(assert) {
  var options = ['Item A', 'Item B', 'Item C'];
  this.set('options', options);
  this.set('selection', 'Item A');

  this.render(hbs`
    {{select-list content=options value=selection required=true}}
  `);

  assert.equal(this.$('select').attr('required'), 'required');
});

test('binds properly to `title` attribute', function(assert) {
  var options = ['Item A', 'Item B', 'Item C'];
  var title = 'This tooltip';

  this.set('options', options);
  this.set('title', title);
  this.set('selection', 'Item A');

  this.render(hbs`
    {{select-list content=options value=selection title=title}}
  `);

  assert.equal(this.$('select').attr('title'), title);
});

test('remains invalid when prompt is selected', function(assert) {
  var options = [];
  this.set('options', options);
  this.set('prompt', 'First prompt');

  this.render(hbs`
    {{select-list content=options value=selection prompt=prompt}}
  `);

  assert.equal(this.$('select option:selected')[0].validity.valid, false);
});
