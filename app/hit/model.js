import DS from 'ember-data';

export default DS.Model.extend({
  distance: DS.attr(),
  humanDistance: DS.attr(),
  station: DS.belongsTo('station')
});
