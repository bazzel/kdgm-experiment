import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.query('hit', params);
  },
  setupController: function(controller, model) {
    controller.set('query', model.query.query);
    this._super(...arguments);
  }
});
