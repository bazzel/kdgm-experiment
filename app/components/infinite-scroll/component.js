import Ember from 'ember';

export default Ember.Component.extend({
  click: function() {
    this.sendAction();
  },
  _startObserveScrolling: function() {
    Ember.$(window).on('scroll', () => {
      this._didScroll();
    })
  }.on('didInsertElement'),
  _stopObserveScrolling: function() {
    Ember.$(window).off('scroll');
  }.on('willDestroyElement'),
  _didScroll: function() {
    if (this._isScrolledToBottom()) {
      this.sendAction();
    }
  },
  _isScrolledToBottom: function() {
    var distanceToTop = Ember.$(document).height() - Ember.$(window).height(),
        top           = Ember.$(document).scrollTop();

    return top === distanceToTop;
  }
});
