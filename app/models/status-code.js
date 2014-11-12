import DS from 'ember-data';

export default DS.Model.extend({
  code: DS.attr('number'),
  title: DS.attr('string'),
  summary: DS.attr('string'),

  references: DS.hasMany('reference'),
  descriptions: DS.hasMany('description')
});
