import Ember from 'ember';

export default Ember.Controller.extend({
  title: function() {
    return this.get('totalHits') + ' kerken gevonden. ' + this.get('fetchedHits') + ' kerken worden getoond.';
  }.property('totalHits', 'fetchedHits'),
  totalHits: function() {
    return this.meta('total_hits');
  }.property('model'),
  fetchedHits: function() {
    return this.get('model.length');
  }.property('model.[]'),
  hasMore: function() {
    var pagination = this.meta('pagination');
    return pagination && pagination.next;
  }.property('model.@each'),
  next: Ember.computed.alias('hasMore'),
  meta: function(key) {
    return this.store.metadataFor('hit')[key];
  },
  actions: {
    doSearch: function() {
      this.store.query('hit', { query: this.get('query') }).then((data) => {
        this.set('model', data);
      });
    },
    loadMore: function() {
      if (!this.get('hasMore')) {
       return;
      }

      this.set('isLoading', true);
      var query = {
        page: this.get('next'),
        query: this.get('query')
      };

      this.store.query('hit', query).then((data) => {
        this.get('model').pushObjects(data.get('content'));
        this.set('isLoading', false);
      });
    }
  }
});
