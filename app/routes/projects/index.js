import Ember from 'ember';
import DS from 'ember-data';
const { service } = Ember.inject;

export default Ember.Route.extend({
	sessionUser: service('session'),
	
  model() {
    return this.get('sessionUser.currentUser').then((sessionUser) => {
      return Ember.RSVP.hash({
        projects: this.store.findAll('project'),
        invitations: this.store.query('invitation', { user_id: sessionUser.get('id'), status: 'pending' })
      });
    });
   
  },

  actions: {
    afterAccept() {
      this.transitionTo('projects.index');
    }
  }
});
