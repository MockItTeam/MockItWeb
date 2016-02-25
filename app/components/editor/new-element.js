import Ember from 'ember';
import Draggable from 'ember-jqueryui/components/ui-draggable';
import $ from 'jquery';

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

    this.set('el-information', this.get('element'));

    let elType = this.get('el-information.type');
    let elementOptions = {};

    if (elType == 'RadioButton') {
      elementOptions.tagName = 'input';
      elementOptions.type = 'radio';
      elementOptions.checked = this.get('el-information.isChecked');
    } else if (elType == 'Panel') {
      elementOptions.tagName = 'div';
    } else if (elType == 'Button') {
      elementOptions.tagName = 'button';
      elementOptions.text = this.get('el-information.text');
    }

    this.set('tagName', elementOptions.tagName);
    this.set('options', elementOptions);
  },

  didInsertElement() {
    this._setOptionElement(this.get('options'));

    let elInformation = this.get('el-information');
    this.$().draggable({
        cancel: ''
      })
      .css({
        top: elInformation.y,
        left: elInformation.x,
        width: elInformation.width,
        height: elInformation.height,
      });
  },

  _setOptionElement(options) {

    if (options.tagName === 'input') {
      // Radio Button
      if (options.type === 'radio') {
        this.set('type', options.type);
        this.set('checked', options.checked);
      }
    }

    // Button
    if (options.tagName === 'button') {
     this.$().html(options.text);
    }
  }
});
