import Ember from 'ember';

export default Ember.Route.extend({

  activate() {
    $('html').attr('class', 'layout-editor is-editor');
  },

  actions: {
    dropped(event, ui, _self) {
      _self.$().droppable({
        drop(event, ui) {
          $(this).append($(ui.helper).clone().draggable());
        }
      });
    },

    dragClone(event, ui, _self) {
      _self.$().draggable({
        revert(event, ui) {
          $(this).data("ui-draggable").originalPosition = {
            top : 0,
            left : 0
          };
          return !event;
        }
      });
    }
  }
});
