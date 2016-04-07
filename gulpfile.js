var gulp = require('gulp');
var del = require('del');
var exec = require('child_process').exec;
var config = require('./scripts/config.json');
var gulpWatch = require('gulp-watch');
var argv = process.argv;

/**
 * Ionic Gulp tasks, for more information on each see
 * https://github.com/driftyco/ionic-gulp-tasks
 */
var buildBrowserify = require('ionic-gulp-browserify-typescript');
var buildSass = require('ionic-gulp-sass-build');
var copyHTML = require('ionic-gulp-html-copy');
var copyFonts = require('ionic-gulp-fonts-copy');
var copyScripts = require('ionic-gulp-scripts-copy');

gulp.task('watch', ['sass', 'html', 'fonts'], function(done) {
  gulpWatch('app/**/*.scss', function() { gulp.start('sass'); });
  gulpWatch('app/**/*.html', function() { gulp.start('html'); });
  buildBrowserify({ watch: true }).on('end', done);
});
gulp.task('build', ['sass', 'html', 'fonts'], buildBrowserify);
gulp.task('sass', buildSass);
gulp.task('html', copyHTML);
gulp.task('fonts', copyFonts);
gulp.task('scripts', copyScripts);
gulp.task('clean', function(done) {
  del('www/build', done);
});

/**
 * Ionic hooks
 * Add ':before' or ':after' to any Ionic project command name to run the specified
 * tasks before or after the command.
 */
gulp.task('serve:before', ['watch']);
gulp.task('emulate:before', ['build']);
gulp.task('deploy:before', ['build']);

// we want to 'watch' when livereloading
var shouldWatch = argv.indexOf('-l') > -1 || argv.indexOf('--livereload') > -1;
gulp.task('run:before', [shouldWatch ? 'watch' : 'build']);

/* FOR IONIC SITE DEBUGGING ONLY */
gulp.task('site-watch', ['site-copy'], function() {
  gulp.watch('app/**/*', ['site-copy']);
});
gulp.task('site-copy', ['build'], function() {
  exec('cp -R www ' + config.demoDest);
});
