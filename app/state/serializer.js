import DS from 'ember-data';

// This code is only need as the KDGMI api is not made up-to-date yet with JSON api spec
// 'relationships' and currently in 'links' attribute and module property not nested undder attributes property

export default DS.JSONAPISerializer.extend({
  normalizeResponse: function (store, primaryModelClass, payload) {
    // The actual data is defined in the `meta` object.
    // Here, we 'move' it to the `data` object
    // and limit it to `state` data only.
    payload.data = payload.meta.facets.filterBy('type', this.payloadKeyFromModelName(primaryModelClass.modelName));
    delete payload.meta.facets;

    return this._super(...arguments);
  },
  extractAttributes: function (modelClass, resourceHash) {
    // There's no `attributes` key, so we define one ourselves.
    var attributes = {};

    modelClass.eachAttribute((key) =>
      attributes[key] = resourceHash[key]
    );

    // We need this to get details info about a state's cities.
    attributes['url'] = resourceHash.links.hits;

    resourceHash.attributes = attributes;
    return this._super(...arguments);
  }
});
