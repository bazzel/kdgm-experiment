import ApplicationAdapter from '../application/adapter';

export default ApplicationAdapter.extend({
  query: function(store, type, query) {
    var url = this.get('kerkdienstGemist.locateUrl');
    query.include = 'station';

    return this.ajax(url, 'GET', { data: query });
  }
});
