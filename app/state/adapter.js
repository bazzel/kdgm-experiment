import ApplicationAdapter from '../application/adapter';

export default ApplicationAdapter.extend({
  findAll: function() {
    var url = this.get('kerkdienstGemist.browse');
    return this.ajax(url);
  }
});
