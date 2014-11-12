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
    id: 100,
    code: 100,
    title: 'Continue',
    summary: 'Client should continue with request'
  }, {
    id: 101,
    code: 101,
    title: 'Switching Protocols',
    summary: 'Server is switching protocols',
  }, {
    id: 102,
    code: 102,
    title: 'Processing (WebDAV) (RFC 2518)',
    summary: 'Server has received and is processing the request'
  }, {
    id: 103,
    code: 103,
    title: 'Checkpoint',
    summary: 'Resume aborted PUT or POST requests'
  }, {
    id: 122,
    code: 122,
    title: 'Request-URI too long',
    summary: 'URI is longer than a maximum of 2083 characters'
  }, {
    id: 200,
    code: 200,
    title: "OK",
    summary: "standard response for successful HTTP requests",
  }, {
    id: 201,
    code: 201,
    title: "Created",
    summary: "request has been fulfilled;  new resource created",
  }, {
    id: 202,
    code: 202,
    title: "Accepted",
    summary: "request accepted, processing pending",
  }, {
    id: 203,
    code: 203,
    title: "Non-Authoritative Information (since HTTP\/1.1)",
    summary: "request processed, information may be from another source",
  }, {
    id: 204,
    code: 204,
    title: "No Content",
    summary: "request processed, no content returned",
  }, {
    id: 205,
    code: 205,
    title: "Reset Content",
    summary: "request processed, no content returned, reset document view",
  }, {
    id: 206,
    code: 206,
    title: "Partial Content",
    summary: "partial resource return due to request header",
  }, {
    id: 207,
    code: 207,
    title: "Multi-Status (WebDAV) (RFC 4918)",
    summary: "XML, can contain multiple separate responses",
  }, {
    id: 208,
    code: 208,
    title: "Already Reported (WebDAV) (RFC 5842)",
    summary: "results previously returned ",
  }, {
        id: 226,
    code: 226,
    title: "IM Used (RFC 3229)",
    summary: "request fulfilled, reponse is instance-manipulations"
  }]
});

export default StatusCode;
