import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {

  activate() {
    $('html').attr('class', 'layout-form is-auth is-sign-in');
  }
});
