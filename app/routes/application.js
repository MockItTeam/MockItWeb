import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  actions: {
    signout() {
      // Fix broken layout when clearing the session
      // The application template is based on the session state
      this.disconnectOutlet('main');
      this.get('session').invalidate();
    }
  }
});
