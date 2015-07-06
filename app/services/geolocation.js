import Ember from 'ember';

export default Ember.Service.extend({
  getCurrentPosition: function() {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }
});
