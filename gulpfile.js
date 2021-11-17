const livereload = require('gulp-livereload');
livereload({ start: true });

const { parallel, series } = require('gulp');
const imagePrc = require('./gulp-tasks/image.processor.js');
const serv = require('./gulp-tasks/browser.sync.js');
const scssProcessor = require('./gulp-tasks/scss.processor.js');
const jsProcessor = require('./gulp-tasks/js.processor.js');
const del = require('./gulp-tasks/delete.dest.js');
const watcher = require('./gulp-tasks/watcher.js');
const svgProcessor = require('./gulp-tasks/svg.processor.js');
const htmlProcessor = require('./gulp-tasks/html.processor');

exports.build = series(
  del.delDestionation,
  scssProcessor.sassProcessor,
  jsProcessor.jsProcessor,
  svgProcessor.svgProcessor,
  imagePrc.imageProcessor
);

exports.dev = parallel(
  serv.serv,
  watcher.watcher
);

exports.default = series(
  del.delDestionation,
  parallel(
    scssProcessor.sassProcessor,
    jsProcessor.jsProcessor,
    svgProcessor.svgProcessor,
    htmlProcessor.htmlProcessor,
    serv.serv
  ),
  series(
    watcher.watcher
  )
);
