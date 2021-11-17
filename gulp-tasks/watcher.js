const { watch, series } = require('gulp');
const { jsProcessor } = require('./js.processor.js');
const { browserSync } = require('./browser.sync.js');
const { sassProcessor } = require('./scss.processor.js');
const htmlProcessor = require('./html.processor');

function watcher () {
  watch('./src/**/*.html').on('change', series(htmlProcessor.htmlProcessor, browserSync.reload));
  watch('./src/js/*.js').on('change', series(jsProcessor, browserSync.reload));
  watch('./src/scss/*.scss').on('change', series(sassProcessor, browserSync.reload));
}

exports.watcher = watcher;
