// See: http://ember.zone/ember-application-initializers/
// for an explanation about Ember Application Initializers
export function initialize(container, application) {
  // application.inject('route', 'foo', 'service:foo');
  var store = container.lookup('service:store');

  // Wait until all of the following promises are resolved
  application.deferReadiness();

  store.findAll('kerkdienst-gemist').then(function(data) {
    container.register('kerkdienst-gemist:current',
                       data.get('firstObject'),
                       { instantiate: false,
                         singleton: true });

    // Inject the namespace into adapters
    //application.inject('route', 'kerkdienstGemist', 'kerkdienst-gemist:current');
    application.inject('adapter', 'kerkdienstGemist', 'kerkdienst-gemist:current');

    // Continue the Application boot process, allowing other Initializers to run
    application.advanceReadiness();
  });
}

export default {
  name: 'kerkdienst-gemist-loader',
  after: 'store',
  initialize: initialize
};
