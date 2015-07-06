import DS from 'ember-data';

export default DS.Model.extend({
  browse: DS.attr(),
  search: DS.attr(),
  locate: DS.attr()
});
