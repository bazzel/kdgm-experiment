import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['search'],
  query: Ember.computed.alias('controllers.search.query'),
  title: function() {
    return this.get('totalHits') + ' kerken gevonden. ' + this.get('fetchedHits') + ' kerken worden getoond.';
  }.property('totalHits', 'fetchedHits'),
  totalHits: function() {
    return this.meta('total_hits');
  }.property('model'),
  fetchedHits: function() {
    return this.get('model.length');
  }.property('model.[]'),
  next: function() {
    var pagination = this.meta('pagination');
    return pagination && pagination.next;
  }.property('model.@each'),
  hasMore: Ember.computed.bool('next'),
  meta: function(key) {
    // TODO: use this, as soon as updates correctly (which isn't currently):
    // return this.get('model.meta')[key];
    return this.store.metadataFor('hit')[key];
  },
  actions: {
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
