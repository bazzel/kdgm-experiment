import Ember from 'ember';

export default Ember.Controller.extend({
  hasMore: function() {
    return this.meta('pagination').next;
  }.property('meta'),
  meta: function(key) {
    return this.store.metadataFor('hit')[key];
  },
  actions: {
    loadMore: function() {
      this.set('isLoading');
      var query = {
        page: this.meta('pagination').next,
        lat: this.meta('latitude'),
        lng: this.meta('longitude')
      };

      console.log(this.meta('pagination').next, this.meta('pagination').page);
      console.log(this.get('hasMore'));

      this.store.query('hit', query).then((data) => {
        this.get('model').pushObjects(data.get('content'));
        this.set('isLoading', false);
      });
    }
  }
});
