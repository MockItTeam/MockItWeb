import Ember from 'ember';
import $ from 'jquery';

export default Ember.Route.extend({

  activate() {
    $('html').attr('class', 'layout-editor is-editor');
  },

  model() {
    let elements = JSON.parse([
      '{',
      '"width": 500,',
      '"height": 500,',
      '"elements": [',
      '{',
      '"id": "1",',
      '"type": "Button",',
      '"x": 10,',
      '"y": 30,',
      '"z": 2,',
      '"width": 200,',
      '"height": 300,',
      '"text": "OK"',
      '},',
      '{',
      '"id": "2",',
      '"type": "RadioButton",',
      '"x": 200,',
      '"y": 200,',
      '"z": 2,',
      '"isChecked": true',
      '},',
      '{',
      '"id": "3",',
      '"type": "Panel",',
      '"x": 5,',
      '"y": 5,',
      '"z": 1,',
      '"width": 400,',
      '"height": 100,',
      '"childrenID": [1,2]',
      '}]',
      '}'].join(''));
    return elements;
  },

  actions: {
    didTransition() {
      let serialized_json = this.modelFor('editor');
      Ember.run.schedule('afterRender', this, () => {
        $('.droppable-el').css({
          'width': serialized_json.width,
          'height': serialized_json.height
        });
      });
    },

    dropped: Ember.on('didTransition', function (event, ui, _self) {
      _self.$().droppable({
        accept: '.draggable-el',
        drop(event, ui) {
          var newClone = $(ui.helper)
            .clone()
            .removeClass('draggable-el')
            .addClass('new-draggable-el')
            .draggable({
              cursor: 'pointer',
              helper: 'original'
            }).css('position', 'absolute');
          $(this).append(newClone);
        }
      });
    }),

    dragged: Ember.on('didTransition', function (event, ui, _self) {

    })
  }
});
