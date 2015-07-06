import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalizeResponse: function (store, primaryModelClass, payload) {
    // The actual data is defined in the `meta` object.
    // Here, we 'move' it to the `data` object.
    payload.data = payload.meta.facets;
    delete payload.meta.facets;

    return this._super(...arguments);
  },
  extractAttributes: function (modelClass, resourceHash) {
    // There's no `attributes` key, so we define one ourselves.
    var attributes = {};

    modelClass.eachAttribute((key) =>
      attributes[key] = resourceHash[key]
    );

    attributes['url'] = resourceHash.links.hits;

    resourceHash.attributes = attributes;
    return this._super(...arguments);
  }
});
