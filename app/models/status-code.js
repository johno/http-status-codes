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
    summary: "standard response for successful HTTP requests"
  }, {
    id: 201,
    code: 201,
    title: "Created",
    summary: "request has been fulfilled;  new resource created"
  }, {
    id: 202,
    code: 202,
    title: "Accepted",
    summary: "request accepted, processing pending"
  }, {
    id: 203,
    code: 203,
    title: "Non-Authoritative Information (since HTTP\/1.1)",
    summary: "request processed, information may be from another source"
  }, {
    id: 204,
    code: 204,
    title: "No Content",
    summary: "request processed, no content returned"
  }, {
    id: 205,
    code: 205,
    title: "Reset Content",
    summary: "request processed, no content returned, reset document view"
  }, {
    id: 206,
    code: 206,
    title: "Partial Content",
    summary: "partial resource return due to request header"
  }, {
    id: 207,
    code: 207,
    title: "Multi-Status (WebDAV) (RFC 4918)",
    summary: "XML, can contain multiple separate responses"
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
  }, {
    id: 300,
    code: 300,
    title: 'Multiple Choices',
    summary: 'multiple options for the resource delivered'
  }, {
    id: 301,
    code: 301,
    title: 'Moved Permanently',
    summary: 'this and all future requests directed to the given URI'
  }, {
    id: 302,
    code: 302,
    title: 'Found',
    summary: 'temporary response to request found via alternative URI'
  }, {
    id: 303,
    code: 303,
    title: 'See Other',
    summary: 'permanent response to request found via alternative URI'
  }, {
    id: 304,
    code: 304,
    title: 'Not Modified',
    summary: 'resource has not been modified since last requested'
  }, {
    id: 305,
    code: 305,
    title: 'Use Proxy (since HTTP\/1.1)',
    summary: 'content located elsewhere, retrieve from there'
  }, {
    id: 306,
    code: 306,
    title: 'Switch Proxy',
    summary: 'subsequent requests should use the specified proxy'
  }, {
    id: 307,
    code: 307,
    title: 'Temporary Redirect (since HTTP\/1.1)',
    summary: 'connect again to different URI as provided'
  }, {
    id: 308,
    code: 308,
    title: 'Permanent Redirect',
    summary: 'connect again to a different URI using the same method'
  }, {
    id: 400,
    code: 400,
    title: 'Bad Request',
    summary: 'request cannot be fulfilled due to bad syntax'
  }, {
    id: 401,
    code: 401,
    title: 'Unauthorized',
    summary: 'authentication is possible but has failed '
  }, {
    id: 402,
    code: 402,
    title: 'Payment Required',
    summary: 'payment required, reserved for future use'
  }, {
    id: 403,
    code: 403,
    title: 'Forbidden',
    summary: 'server refuses to respond to request'
  }, {
    id: 404,
    code: 404,
    title: 'Not Found',
    summary: 'requested resource could not be found'
  }, {
    id: 405,
    code: 405,
    title: 'Method Not Allowed',
    summary: 'request method not supported by that resource'
  }, {
    id: 406,
    code: 406,
    title: 'Not Acceptable',
    summary: 'content not acceptable according to the Accept headers'
  }, {
    id: 407,
    code: 407,
    title: 'Proxy Authentication Required',
    summary: 'Client must first authenticate itself with the proxy'
  }, {
    id: 408,
    code: 408,
    title: 'Request Timeout',
    summary: 'server timed out waiting for the request'
  }, {
    id: 409,
    code: 409,
    title: 'Conflict',
    summary: 'request could not be processed because of conflict'
  }, {
    id: 410,
    code: 410,
    title: 'Gone',
    summary: 'resource is no longer available and will not be available again'
  }, {
    id: 411,
    code: 411,
    title: 'Length Required',
    summary: 'request did not specify the length of its content'
  }, {
    id: 412,
    code: 412,
    title: 'Precondition Failed',
    summary: 'server does not meet request preconditions'
  }, {
    id: 413,
    code: 413,
    title: 'Request Entity Too Large',
    summary: 'request is larger than the server is willing or able to process'
  }, {
    id: 414,
    code: 414,
    title: 'Request-URI Too Long',
    summary: 'URI provided was too long for the server to process'
  }, {
    id: 415,
    code: 415,
    title: 'Unsupported Media Type',
    summary: 'server does not support media type'
  }, {
    id: 416,
    code: 416,
    title: 'Requested Range Not Satisfiable',
    summary: 'client has asked for unprovidable portion of the file'
  }, {
    id: 417,
    code: 417,
    title: 'Expectation Failed',
    summary: 'server cannot meet requirements of Expect request-header field'
  }, {
    id: 418,
    code: 418,
    title: 'I\'m a teapot (RFC 2324)',
    summary: "I'm a teapot",
  }, {
    id: 420,
    code: 420,
    title: 'Enhance Your Calm',
    summary: 'Twitter rate limiting'
  }, {
    id: 422,
    code: 422,
    title: 'Unprocessable Entity (WebDAV) (RFC 4918)',
    summary: 'request unable to be followed due to semantic errors'
  }, {
    id: 423,
    code: 423,
    title: 'Locked (WebDAV) (RFC 4918)',
    summary: 'resource that is being accessed is locked'
  }, {
    id: 424,
    code: 424,
    title: 'Failed Dependency (WebDAV) (RFC 4918)',
    summary: 'request failed due to failure of a previous request'
  }, {
    id: 426,
    code: 426,
    title: 'Upgrade Required (RFC 2817)',
    summary: 'client should switch to a different protocol'
  }, {
    id: 428,
    code: 428,
    title: 'Precondition Required',
    summary: 'origin server requires the request to be conditional'
  }, {
    id: 429,
    code: 429,
    title: 'Too Many Requests',
    summary: 'user has sent too many requests in a given amount of time'
  }, {
    id: 431,
    code: 431,
    title: 'Request Header Fields Too Large',
    summary: 'server is unwilling to process the request'
  }, {
    id: 444,
    code: 444,
    title: 'No Response',
    summary: 'server returns no information and closes the connection'
  }, {
    id: 449,
    code: 449,
    title: 'Retry With',
    summary: 'request should be retried after performing action'
  }, {
    id: 450,
    code: 450,
    title: 'Blocked by Windows Parental Controls',
    summary: 'Windows Parental Controls blocking access to webpage'
  }, {
    id: 451,
    code: 451,
    title: 'Wrong Exchange server',
    summary: 'the server cannot reach the client\'s mailbox'
  }, {
    id: 499,
    code: 499,
    title: 'Client Closed Request',
    summary: 'connection closed by client while HTTP server is processing'
  }, {
    id: 500,
    code: 500,
    title: 'Internal Server Error',
    summary: 'generic error message',
  }, {
    id: 501,
    code: 501,
    title: 'Not Implemented',
    summary: 'server does not recognise method or lacks ability to fulfill',
  }, {
    id: 502,
    code: 502,
    title: 'Bad Gateway',
    summary: 'server received an invalid response from upstream server',
  }, {
    id: 503,
    code: 503,
    title: 'Service Unavailable',
    summary: 'server is currently unavailable',
  }, {
    id: 504,
    code: 504,
    title: 'Gateway Timeout',
    summary: 'gateway did not receive response from upstream server',
  }, {
    id: 505,
    code: 505,
    title: 'HTTP Version Not Supported',
    summary: 'server does not support the HTTP protocol version',
  }, {
    id: 506,
    code: 506,
    title: 'Variant Also Negotiates (RFC 2295)',
    summary: 'content negotiation for the request results in a circular reference',
  }, {
    id: 507,
    code: 507,
    title: 'Insufficient Storage (WebDAV) (RFC 4918)',
    summary: 'server is unable to store the representation',
  }, {
    id: 508,
    code: 508,
    title: 'Loop Detected (WebDAV) (RFC 5842)',
    summary: 'server detected an infinite loop while processing the request',
  }, {
    id: 509,
    code: 509,
    title: 'Bandwidth Limit Exceeded (Apache bw\/limited extension)',
    summary: 'bandwidth limit exceeded',
  }, {
    id: 510,
    code: 510,
    title: 'Not Extended (RFC 2774)',
    summary: 'further extensions to the request are required',
  }, {
    id: 511,
    code: 511,
    title: 'Network Authentication Required',
    summary: 'client needs to authenticate to gain network access',
  }, {
    id: 598,
    code: 598,
    title: 'Network read timeout error',
    summary: 'network read timeout behind the proxy ',
  }, {
    id: 599,
    code: 599,
    title: 'Network connect timeout error',
    summary: 'network connect timeout behind the proxy',
  }]
});

export default StatusCode;
