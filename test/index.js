'use strict';

var should = require('should'); // jshint ignore:line

var jscs = require('../lib/index');

var gulpMock = {};
var task = null;

gulpMock.task = function(name, description, deps, func) {// jshint ignore:line
  task = func;
};

var configMock = {
  src: ['**/*.js', '!./node_modules/**', '!./docs/**']
};

jscs(gulpMock, configMock);

describe('Gulp Module JSCS', function() {
  it('Should return a function', function() {
    jscs.should.be.type('function');
  });

  it('Should create a task', function() {
    task.should.be.type('function');
  });

  it('Should run and throw an error', function(cb) {
    try {
      task();
    } catch (e) {
      cb();
    }
  });
});
