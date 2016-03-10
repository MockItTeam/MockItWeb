import Ember from 'ember'
const { service } = Ember.inject;

export default Ember.Component.extend({
	store: service('store'),

  actions: {
    preview(files) {
      let project = this.get('project');

      if(files[0]) {
        project.set('image', files[0]);

        var reader = new FileReader();
        reader.onload = (e) => {
          $('.image-upload-container .image-preview img').attr('src', e.target.result);
        }

        reader.readAsDataURL(files[0]);
      }
    },

    uploadImage(project) {
      project.save().then(() => {
        this.set('success', 'Upload succesful');
      }, () => {
        this.set('success', undefined);
      })    
    }
  }
});