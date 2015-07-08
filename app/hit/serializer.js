import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  extractAttributes: function (modelClass, resourceHash) {
    // There's no `attributes` key, so we define one ourselves.
    var attributes = {};

    modelClass.eachAttribute((key) =>
      attributes[key] = resourceHash[key]
    );

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
