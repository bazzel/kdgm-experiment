import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    this.geolocation.getCurrentPosition().then((position) => {
      let coords = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      //alert('lat: ' + coords.lat + ', lng: ' + coords.lng);
      this.store.query('station', coords);
    });
  }
});
