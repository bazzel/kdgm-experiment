import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    doSearch: function(query) {
      this.transitionTo('search.results', query);
    }
  }
});
