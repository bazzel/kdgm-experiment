import DS from 'ember-data';
import ENV from '../config/environment';

export default DS.JSONAPIAdapter.extend({
  headers: {
    'Authorization': 'Basic ' + btoa(ENV.APP.user + ':' + ENV.APP.password)
  }
});
