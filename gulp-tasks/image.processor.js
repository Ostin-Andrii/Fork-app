const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
// const webp = require('imagemin-webp');

const imageProcessor = async () => {
  return await gulp.src('./src/img/**/*.{jpg,jpeg,png,gif,ico,webp}')
    .pipe(imagemin())
  // .pipe(webp({quality: 50}))
    .pipe(gulp.dest('./dist/img/'));
};

exports.imageProcessor = imageProcessor;
