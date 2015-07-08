import DS from 'ember-data';

export default DS.Model.extend({
  distance: DS.attr(),
  station: DS.belongsTo('station')
});
