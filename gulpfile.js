const { series } = require('gulp');
const fs = require('fs');

// The `clean` function is not exported so it can be considered a private task.
// It can still be used within the `series()` composition.
function clean(cb) {
  // body omitted
  cb();
}

// The `build` function is exported so it is public and can be run with the `gulp` command.
// It can also be used within the `series()` composition.
function build(cb) {
  // body omitted
  cb();
}

async function asyncAwaitTask() {
  const { version } = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  console.log(version);
  await Promise.resolve('some result');
}

exports.build = build;
exports.default = asyncAwaitTask;
exports.default = series(clean, build);

// function defaultTask(cb) {
//     // place code for your default task here
//     cb();
// }

// exports.default = defaultTask