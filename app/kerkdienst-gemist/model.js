import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  browse: DS.attr(),
  search: DS.attr(),
  locate: DS.attr(),
  browseUrl: Ember.computed.alias('browse'),
  locateUrl: function() {
    // Remove the querystring
    return this.get('locate') && this.get('locate').split(/[?#]/)[0];
  }.property('locate')
});
