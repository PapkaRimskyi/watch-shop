'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var server = require('browser-sync').create();
var imagemin = require('gulp-imagemin');
var webp = require('gulp-webp');
var del = require('del');
var csso = require('gulp-csso');
var rename = require('gulp-rename');
var svgo = require('svgo');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var babel = require('gulp-babel');

gulp.task('assemblyJs', function () {
  return gulp.src('source/js/*.js')
  .pipe(babel({
    presets: ['@babel/preset-env']
  }))
  // .pipe(uglify())
  .pipe(gulp.dest('build/js'))
});

gulp.task('css', function () {
  return gulp.src('source/sass/style.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer({
        cascade: false,
        overrideBrowserslist: ['last 2 versions'],
        grid: true
      })
    ]))
    .pipe(gulp.dest('build/css'))
    .pipe(csso())
    .pipe(rename('style-min.css'))
    .pipe(gulp.dest('build/css'))
    .pipe(server.stream());
});

gulp.task('server', function () {
  server.init({
    server: 'build/',
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.task('refresh', function (done) {
    server.reload();
    done();
  });

  gulp.watch('source/sass/**/*.{scss,sass}', gulp.series('css', 'refresh'));
  gulp.watch('source/*.html', gulp.series('html', 'refresh'));
  gulp.watch('source/js/*.js', gulp.series('assemblyJs', 'refresh'));
});

gulp.task('images', function() {
  return gulp.src('source/img/**/*.{png,jpg,svg}')
  .pipe(imagemin([
    imagemin.optipng({optimizationLevel: 3}),
    imagemin.jpegtran({progressive: true}),
    imagemin.svgo()
  ]))
  .pipe(gulp.dest('source/img'));
});

gulp.task('webp', function() {
  return gulp.src('source/img/**/*.{png,jpg}')
  .pipe(webp({quality: 90}))
  .pipe(gulp.dest('source/img'));
});

gulp.task('clean', function () {
  return del('build');
});

gulp.task('copy', function () {
  return gulp.src([
    'source/fonts/**/*.{woff,woff2}',
    'source/img/**',
    'source/music/**'
  ], {
    base: 'source'
  })
  .pipe(gulp.dest('build'));
});

gulp.task('html', function () {
  return gulp.src('source/*.html')
  .pipe(gulp.dest('build'));
});

gulp.task('build', gulp.series('clean', 'copy', 'html', 'css', 'assemblyJs'));

gulp.task('start', gulp.series('build', 'server'));
