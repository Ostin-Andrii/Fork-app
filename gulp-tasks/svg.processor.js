const { src, dest } = require('gulp');

const svgProcessor = async (cb) => {
  await src('./src/img/**/*.svg')
    .pipe(dest('./dist/img/'));
  cb();
};

exports.svgProcessor = svgProcessor;
