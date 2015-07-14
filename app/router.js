import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('states');
  this.route('state', { path: 'states/:state_id' });
  this.route('nearby');
  this.route('search', function() {
    this.route('results', { path: ':query' });
  });
});

export default Router;
