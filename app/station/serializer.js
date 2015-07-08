import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  extractAttributes: function (modelClass, resourceHash) {
    // There's no `attributes` key, so we define one ourselves.
    var attributes = {};

    modelClass.eachAttribute((key) =>
      attributes[key] = resourceHash[key]
    );

    resourceHash.attributes = attributes;
    return this._super(...arguments);
  }
});
