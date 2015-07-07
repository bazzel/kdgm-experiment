import ApplicationAdapter from '../application/adapter';

export default ApplicationAdapter.extend({
  findAll: function() {
    var url = this.get('kerkdienstGemist.browseUrl');
    return this.ajax(url);
  }
});
