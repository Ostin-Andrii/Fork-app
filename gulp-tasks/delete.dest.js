const delDest = require('del');

const  delDestination = async (cb) => {
  await  delDest('./dist/');
    cb();
}

exports.delDestionation = delDestination;