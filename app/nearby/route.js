import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.geolocation.getCurrentPosition().then((position) => {
      let coords = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      return this.store.query('hit', coords);
    });
  }
});
