import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {

	//redirect to signin page when not authenticated
	// beforeModel() {
	// 	if(!this.get('session.isAuthenticated')) {
	// 		this.transitionTo('sessions.new');
	// 	}
	// },

  actions: {
    signout() {
      // Fix broken layout when clearing the session
      // The application template is based on the session state
      this.disconnectOutlet('main');
      this.get('session').invalidate();
    }
  }
});
