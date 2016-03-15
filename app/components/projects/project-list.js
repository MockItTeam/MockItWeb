import Ember from 'ember'
const { service } = Ember.inject;

export default Ember.Component.extend({
	store: service('store'),
  sessionUser: service('session'),

  actions: {
   
  }
});