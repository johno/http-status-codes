import DS from 'ember-data';

var StatusCode = DS.Model.extend({
  code: DS.attr('number'),
  title: DS.attr('string'),
  summary: DS.attr('string'),

  references: DS.hasMany('reference'),
  descriptions: DS.hasMany('description')
});

StatusCode.reopenClass({
  FIXTURES: [{
    id: 1,
    code: 100,
    title: 'Continue',
    summary: 'Client should continue with request'
  }, {
    id: 2,
    code: 101,
    title: 'Switching Protocols',
    summary: 'Server is switching protocols',
  }, {
    id: 3,
    code: 102,
    title: 'Processing (WebDAV) (RFC 2518)',
    summary: 'Server has received and is processing the request'
  }, {
    id: 4,
    code: 103,
    title: 'Checkpoint',
    summary: 'Resume aborted PUT or POST requests'
  }, {
    id: 5,
    code: 122,
    title: 'Request-URI too long',
    summary: 'URI is longer than a maximum of 2083 characters'
  }]
});

export default StatusCode;
