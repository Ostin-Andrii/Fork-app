const browserSync = require('browser-sync').create();

const serv = (cb) => {
  browserSync.init({
    server: {
      baseDir: './'
    },
    // browser: 'firefox',
    // open: true
  });
  browserSync.watch('build', browserSync.reload);
  cb();
};

exports.serv = serv;
exports.browserSync = browserSync;
