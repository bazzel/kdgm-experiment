import Ember from 'ember';

// Simplified version of
// https://github.com/hhff/ember-infinity/blob/master/addon/components/infinity-loader.js
export default Ember.Component.extend({
  click: function() {
    this.sendAction();
  },
  _startObserveScrolling: function() {
    Ember.$(window).on('scroll', () => {
      Ember.run.debounce(this, this._checkIfInView, 10);
    });
  }.on('didInsertElement'),
  _checkIfInView: function() {
    if (this._isScrolledToBottom()) {
      this.sendAction();
    }
  }.on('didInsertElement'),
  _stopObserveScrolling: function() {
    Ember.$(window).off('scroll');
  }.on('willDestroyElement'),
  _isScrolledToBottom: function() {
    var distanceToTop = Ember.$(document).height() - Ember.$(window).height(),
    top           = Ember.$(document).scrollTop();

    return top === distanceToTop;
  },
  queryDidChange: Ember.observer('query', function() {
    // Currently this ensures more than 10 items
    // are displayed if possible.
    // However, using a `wait` of 1.000 doesn't feel right :(
    Ember.run.debounce(this, this._checkIfInView, 1000);
  })
});
