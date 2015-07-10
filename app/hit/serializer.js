import DS from 'ember-data';
import Ember from 'ember';


// This code is only need as the KDGMI api is not made up-to-date yet with JSON api spec
// 'relationships' and currently in 'links' attribute and module property not nested undder attributes property

export default DS.JSONAPISerializer.extend({
  extractAttributes: function (modelClass, resourceHash) {
    // There's no `attributes` key, so we define one ourselves.
    var attributes = {};

    modelClass.eachAttribute((key) => {
      attributes[key.dasherize()] = resourceHash[key.decamelize()];
    });

    resourceHash.attributes = attributes;
    resourceHash.relationships = this._normalizeBelongsToStation(resourceHash);

    return this._super(...arguments);
  },

  _normalizeBelongsToStation: function(resourceHash) {
    var relationships = resourceHash.links;
    delete resourceHash.links;

    relationships.station.data = relationships.station.linkage;
    delete relationships.station.linkage;

    return relationships;
  }
});
