var gulp = require('gulp');
var browserify = require('browserify');
var fs = require('fs');
gulp.task('a', function() {
    browserify().add('./src/a.js').bundle().pipe(fs.createWriteStream('./dist/bundle.js'));
})