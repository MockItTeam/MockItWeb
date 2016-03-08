import Ember from 'ember'
const { service } = Ember.inject;

export default Ember.Component.extend({
	store: service('store'),
  
  _checkDirtyAttributes: Ember.on('willRender', function(){
    this.set('canSave', this.get('project').get('hasDirtyAttributes'));
  }),

  actions: {
    save(project) {
      if(project.get('hasDirtyAttributes')) {
        project.save().then(() => {
          this.set('success', 'Project updated');
        }, () => {
          this.set('success', undefined);
        })
      }
    }
  }
});