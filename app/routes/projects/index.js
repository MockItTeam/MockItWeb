import Ember from 'ember';
import $ from 'jquery';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('project');
  },

  actions: {
    didTransition() {

    }
  }
});
