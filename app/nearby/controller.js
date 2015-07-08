import Ember from 'ember';

export default Ember.Controller.extend({
  hasMore: function() {
    return this.get('model.length') > 0 && this.get('model.length') < this.meta('total_hits');
  }.property('model.@each'),
  meta: function(key) {
    return this.store.metadataFor('hit')[key];
  },
  actions: {
    loadMore: function() {
      this.set('isLoading', true);
      var query = {
        page: this.meta('pagination').next,
        lat: this.meta('latitude'),
        lng: this.meta('longitude')
      };

      this.store.query('hit', query).then((data) => {
        this.get('model').pushObjects(data.get('content'));
        this.set('isLoading', false);
      });
    }
  }
});
