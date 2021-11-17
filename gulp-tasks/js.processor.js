const {src, dest} = require("gulp");
const concat = require("gulp-concat");
const minifyjs = require('gulp-js-minify');
const rename = require("gulp-rename");

const jsProcessor = async (cb) => {
  await src('./src/js/*.js')
      .pipe(concat('scripts.js'))
      .pipe(minifyjs())
      .pipe(rename('scripts.min.js'))
      .pipe(dest('./dist/js/'))
  cb();
}

exports.jsProcessor = jsProcessor;
