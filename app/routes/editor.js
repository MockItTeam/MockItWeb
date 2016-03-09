import Ember from 'ember';
import $ from 'jquery';

export default Ember.Route.extend({

  activate() {
    $('html').attr('class', 'layout-editor is-editor');
  },

  model() {
    let elements = JSON.parse("{\"width\":1333,\"height\":1000,\"elements\":[{\"id\":0,\"type\":\"Root\",\"x\":0,\"y\":0,\"z\":0,\"width\":1333,\"height\":1000,\"children_id\":[146,223,126,252,253,254,255]},{\"id\":146,\"type\":\"Triangle\",\"x\":1154,\"y\":164,\"z\":1,\"width\":18,\"height\":84,\"children_id\":[]},{\"id\":223,\"type\":\"Quadrilateral\",\"x\":911,\"y\":45,\"z\":1,\"width\":49,\"height\":45,\"children_id\":[]},{\"id\":126,\"type\":\"Panel\",\"x\":348,\"y\":227,\"z\":1,\"width\":762,\"height\":542,\"children_id\":[66,37,33,85]},{\"id\":66,\"type\":\"TextField\",\"x\":718,\"y\":416,\"z\":2,\"width\":312,\"height\":52,\"children_id\":[]},{\"id\":37,\"type\":\"TextField\",\"x\":713,\"y\":562,\"z\":2,\"width\":303,\"height\":58,\"children_id\":[]},{\"id\":33,\"type\":\"TextArea\",\"x\":453,\"y\":603,\"z\":2,\"width\":222,\"height\":90,\"children_id\":[]},{\"id\":85,\"type\":\"VideoPlayer\",\"x\":426,\"y\":356,\"z\":2,\"width\":260,\"height\":168,\"children_id\":[]},{\"id\":252,\"type\":\"Text\",\"x\":100,\"y\":60,\"z\":1,\"width\":200,\"height\":50,\"text\":\"SAMPLE Mockup\",\"children_id\":[]},{\"id\":253,\"type\":\"Text\",\"x\":100,\"y\":120,\"z\":1,\"width\":200,\"height\":50,\"text\":\"word.\",\"children_id\":[]},{\"id\":254,\"type\":\"Text\",\"x\":100,\"y\":180,\"z\":1,\"width\":200,\"height\":50,\"text\":\"Video Titu.\",\"children_id\":[]},{\"id\":255,\"type\":\"Text\",\"x\":100,\"y\":240,\"z\":1,\"width\":200,\"height\":50,\"text\":\"Confirmed\",\"children_id\":[]}]}");
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
