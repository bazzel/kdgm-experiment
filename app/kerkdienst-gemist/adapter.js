import ApplicationAdapter from '../application/adapter';
import ENV from '../config/environment';

export default ApplicationAdapter.extend({
  findAll: function() {
    var url = ENV.APP.host;
    return this.ajax(url);
  }
});
