const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
// const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
// const minify = require('gulp-minify');
const rename = require('gulp-rename');

const scssProcessor = async (cb) => {
  await src('./src/scss/*.scss')
    .pipe(concat('styles.scss'))
    .pipe(sass())
    // .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(autoprefixer({
      cascade: false,
      Browserslist: ['last 4 versions']
    }))
    // .pipe(minify())
    .pipe(rename('styles.min.css'))
    .pipe(dest('./dist/css/'));
  cb();
};

exports.sassProcessor = scssProcessor;
