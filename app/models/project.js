import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string', {defaultValue: ''}),
  image: DS.attr('string'),
  created_at: DS.attr('date'),
  updated_at: DS.attr('date')
});
