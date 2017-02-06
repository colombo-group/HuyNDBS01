
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
gulp.task('sass', function () {
    return gulp.src('app/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'));
});
gulp.task('concat',function(){
	return gulp.src('app/css/bootstrap/*.css')
	.pipe(concat('style.css'))
	.pipe(gulp.dest('app/css'));
});
// gulp.task('concat2',function(){
// 	return gulp.src('app/css/layout/**/*.css')
// 	.pipe(concat('*.css'))
// 	.pipe(gulp.dest('app/css'));
// });
gulp.task('watch',function(){
	gulp.watch('app/scss/style.scss',['sass']);
	// gulp.watch('app/css/layout/**/*.css',['concat2']);
});
gulp.task('default',['sass']);