import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    this.geolocation.getCurrentPosition().then((position) => {
      let coords = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      this.store.query('station', coords);
    });
  }
});
