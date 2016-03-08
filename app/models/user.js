import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr('string'),
  created_at: DS.attr('date'),
  updated_at: DS.attr('date'),

  ownerTo: DS.belongsTo('project', {
    inverse: 'owner'
  }),
  projects: DS.hasMany('project', {
    inverse: 'members'
  })
});
