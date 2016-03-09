import Ember from 'ember';
import Draggable from 'ember-jqueryui/components/ui-draggable';
import $ from 'jquery';
import ElementFactory from 'vendor/element'

export default Draggable.extend({
  classNames: ['new-draggable-el'],

  attributeBindings: [
    'type',
    'checked',
    'disabled',
    'tabindex',
    'name',
    'autofocus',
    'required',
    'form',
    'value'
  ],

  init() {
    this._super(...arguments);
  },

  didInsertElement() {
    let element = element.ElementFactory.createElement(this.get('e'));    
    element.render(this.$());
  },

});