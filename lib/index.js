'use strict';
var jscs = require('gulp-jscs');

// store a reference to our parameters in local variables
var gulp = null;
var config = null;

/**
 * Sets up the jscs task
 *
 * @param {Object} gulpRef The gulp object to attach the task to
 * @param {Object} conf The configuration options
 */
function jscsSetup(gulpRef, conf) {
  // save a reference to our parameters into a local variable
  gulp = gulpRef;
  config = conf;

  gulp.task('jscs', false, ['soften'], jscsTask);
}

/**
 * Runs the jscs task
 */
function jscsTask() {
  // we default to the google baseline then override a couple of options
  return gulp.src(config.src)
    .pipe(jscs({
      preset: 'google',
      maximumLineLength: 120,
      requireCamelCaseOrUpperCaseIdentifiers: 'ignoreProperties'
    }));
}

module.exports = jscsSetup;
