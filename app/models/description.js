import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  summary: DS.attr('string'),
  link: DS.attr('string'),

  statusCode: DS.belongsTo('statusCode')
});
