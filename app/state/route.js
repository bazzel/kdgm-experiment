import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findRecord('state', params.state_id).then((state) => {
      return this.store.query('city', { hit: state.get('url') });
    });
  }
});
