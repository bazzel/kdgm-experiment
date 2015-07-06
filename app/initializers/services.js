export function initialize(container, application) {
  // application.inject('route', 'foo', 'service:foo');
  application.inject('route', 'geolocation', 'service:geolocation');
}

export default {
  name: 'services',
  initialize: initialize
};
