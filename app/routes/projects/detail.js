import Ember from 'ember'

export default Ember.Route.extend({
	model(params) {
		return Ember.RSVP.hash({
			project: this.store.findRecord('project', params.project_id).then((project) => {
				project.get('invitations').then((invitations) => {
					invitations = invitations.filterBy('status', 'pending');
					invitations.forEach((invitation) => {
						invitation.set('recipient', this.store.findRecord('user', invitation.get('recipient_id')));
					});
				});
				return project;
			})
		});
	},

	actions: {
		afterDeleted() {
			this.transitionTo('projects.index');
		}
	}
});