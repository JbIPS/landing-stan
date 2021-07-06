const { watch, series, task } = require('gulp');
const cwebp = require('gulp-cwebp');
const flatMap = require('flat-map').default;
const scaleImages = require('gulp-scale-images');
var sourcemaps = require('gulp-sourcemaps');

'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

function sassCompile(cb) {
  return gulp.src('./sass/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./css'));
}


// TRAITER LES IMAGES 
function webp(cb) {
  gulp.src('./img/web/*.{jpeg,jpg,png,gif}')
    .pipe(cwebp())
    .pipe(gulp.dest('./img/web'));
  cb();
}

const twoVariantsPerFile = (file, cb) => {
  const img = file.clone()
  imgFullWidth.scale = {maxWidth: 1920}
  const imgFullWidth = file.clone()
  imgFullWidth.scale = {maxWidth: 1920}
  const imgFullMobileWidth = file.clone()
  imgFullMobileWidth.scale = {maxWidth: 768}
  cb(null, [imgFullWidth, imgFullMobileWidth])
}

function imgResize(cb) {
  gulp.src('./img/originals/*')
    .pipe(flatMap(twoVariantsPerFile))
    .pipe(scaleImages())
    .pipe(gulp.dest('./img/web'));
  cb();
}

exports.default = function() {
  watch('./sass/*.scss', series(sassCompile));
};
exports.build = sassCompile;
task(imgResize);
task(webp);
