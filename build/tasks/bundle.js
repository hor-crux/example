var gulp = require('gulp');
var paths = require('../paths');
var del = require('del');
var shell = require('gulp-shell');
var runSequence = require('run-sequence');

var bundleName = "build"

gulp.task('bundle:clean', function() {
  var files = [
	  paths.output + "/" + bundleName + ".js",
	  paths.output + "/" + bundleName + ".js.map",
	  paths.output + "/" + bundleName + ".html"
	]
  return del(files);
});

gulp.task('bundle', ['bundle:clean'], function() {
	var commands = [
		"jspm bundle **/* " + paths.output + "/" + bundleName + ".js" + " --inject"
	]
	
	return gulp.src('')
	.pipe(shell(commands));
});

gulp.task('bundle:unbundle', function(callback) {
	var commands = [
		"jspm unbundle"
	]
	
	gulp.src('')
	.pipe(shell(commands));
});

gulp.task('unbundle', ['bundle:unbundle', 'bundle:clean'], function() {});
