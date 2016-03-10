import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string', {defaultValue: ''}),
  status: DS.attr('number'),
  created_at: DS.attr('date'),
  updated_at: DS.attr('date'),
  user: DS.belongsTo('user'),
  project: DS.hasMany('project'),
  image: DS.attr('file')
});
