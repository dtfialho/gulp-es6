const gulp       = require('gulp'),
	  babelify   = require('babelify'),
	  browserify = require('browserify'),
	  source     = require('vinyl-source-stream'),
	  buffer     = require('vinyl-buffer'),
	  path       = require('path'),
	  plumber    = require('gulp-plumber');

const build = path.join(__dirname, 'build');
const src   = path.join(__dirname, 'src');

gulp.task('es6', () => {
	return browserify(src + '/app.js')
		.transform('babelify', {
			presets: ['es2015']
		})
		.bundle()
		.pipe(plumber())
		.pipe(source('app.js'))
		.pipe(buffer())
		.pipe(gulp.dest(build));
});

gulp.task('default', ['es6'], () => {
	gulp.watch(src + '/**/*.js', ['es6']);
});