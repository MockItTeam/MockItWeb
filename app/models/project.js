import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string', {defaultValue: ''}),
  status: DS.attr('string', {defaultValue: ''}),
  created_at: DS.attr('date'),
  updated_at: DS.attr('date')
});
