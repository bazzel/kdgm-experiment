import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalizeResponse: function (store, primaryModelClass, payload) {
    var data = [];

    var item = {
      type: primaryModelClass.modelName,
      id: 1,
      attributes: {}
    };

    primaryModelClass.eachAttribute((key) =>
      item.attributes[key] = payload.links[key]
    );

    data.push(item);
    payload.data = data;

    return payload;
  }
});
