import ApplicationAdapter from '../application/adapter';

export default ApplicationAdapter.extend({
  query: function(store, type, query) {
    var url = query.hit;

    return this.ajax(url);
  }
});
