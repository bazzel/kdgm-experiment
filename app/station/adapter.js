import ApplicationAdapter from '../application/adapter';

export default ApplicationAdapter.extend({
  query: function(store, type, query) {
    var url = this.get('kerkdienstGemist.locateUrl');
    query.include = 'station';

    return this.ajax(url, 'GET', { data: query });
  },

  find: function(a,b, id) {
    return this.ajax('http://kerkdienstgemist.nl/api/v1/stations/' + id);
  }
});
