import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('infinite-scroll', 'Integration | Component | infinite scroll', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{infinite-scroll}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#infinite-scroll}}
      template block text
    {{/infinite-scroll}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
