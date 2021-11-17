const { src, dest } = require('gulp');
const fileinclude = require('gulp-file-include');

const htmlProcessor = async (cb) => {
  await src('./src/**/*.html')
    .pipe(fileinclude())
    .pipe(dest('./'));
  cb();
};

exports.htmlProcessor = htmlProcessor;
