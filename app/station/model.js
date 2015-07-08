import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  image: DS.attr(),
  homepage: DS.attr(),
  hit: DS.belongsTo('hit')
});
