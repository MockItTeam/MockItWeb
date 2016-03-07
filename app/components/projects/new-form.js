import Ember from 'ember'
const { service } = Ember.inject;

export default Ember.Component.extend({
	store: service('store'),

  actions: {
    save(project) {
    	project.save().then(() => {
    		this.set('success', 'Project created');
    	}, () => {
    		this.set('success', undefined)
    	})
    }
  }
});