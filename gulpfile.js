'use strict';

const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const cssmin = require('gulp-cssmin');
const watch = require('gulp-watch');
const rename = require('gulp-rename');
var sass = require('gulp-sass');
var compiler = require('sass');
sass.compiler = compiler;
var sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function() {
    return gulp.src('./scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('./'))
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./css/'))
});

gulp.task('watch', function() {
    gulp.watch('./scss/**/*.scss', gulp.series('sass'))
});