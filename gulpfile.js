var gulp = require('gulp'),
	sass = require('gulp-sass'),
	p = require('gulp-load-plugins')();

var browserSync = require('browser-sync');
var reload = browserSync.reload;

// Start the server
gulp.task('browser-sync', function() {
	browserSync({
		open : true,
		server: {
			baseDir: "./"
		}
	});
});

gulp.task('slides',function () {
	gulp.src('index.jade')
		.pipe(p.jade())
		.pipe(gulp.dest('./'))
		.pipe(reload({stream:true}))
});


gulp.task('styles',function() {
	gulp.src('./scss/styles.scss')
		.pipe(sass())
		.pipe(p.autoprefixer())
		.pipe(gulp.dest('./css'))
		.pipe(reload({stream:true}))
});


gulp.task('default', ['slides','styles','browser-sync'] ,function() {
	gulp.watch('./**/*.jade',['slides']);
	gulp.watch('./**/*.scss',['styles']);
});
