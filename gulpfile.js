/**
 * Created by dell on 2017/5/5.
 */
var gulp = require('gulp');
var less = require('gulp-less');
var cssnano = require('gulp-cssnano');
var uglify = require('gulp-uglify');
gulp.task('c', function() {
    // 将你的默认的任务代码放在这
    console.log("aaa");
    gulp.src('src/statics/common/css.css')
        .pipe(gulp.dest('dist/statics/common/'));
});
gulp.task('dist', function() {
    // 将你的默认的任务代码放在这
    gulp.watch('src/statics/common/css.css',['c'])
});
gulp.task('css', function() {
    gulp.src('src/statics/less/*.less')
        .pipe(less())
        .pipe(cssnano())
        .pipe(gulp.dest('dist/statics/css/'));
});
gulp.task('pp', function () {
    console.log("123");
    gulp.src('src/statics/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/statics/js/'));
});