const gulp = require('gulp');
const { series, parallel } = require('gulp');
const { src, dest } = require('gulp');
//const cssnano = require('gulp-cssnano');
//const sass = require('gulp-sass'); //ERR: gulp-sass no longer has a default Sass compiler;
//const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

function defaultTask(cb) {
    // place code for your default task here
    cb();
}

function hello() {
    console.log("Testing gulp task");
}

// function generateCSS(cb) {
//     src('./app/scss/**/*.scss')
//         .pipe(sass().on('error', sass.logError))
//         .pipe(dest('dist/stylesheets'));
//     cb();
// }

function generateJS(cb) {
    src('./app/js/**/*.js')
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(dest('dist/js'));
    cb();
}

exports.default = defaultTask
//exports.css = generateCSS;
//exports.js = generateJS;
exports.build = series(hello, generateJS);

// exports.build = series(
//     clean,
//     parallel(
//       cssTranspile,
//       series(jsTranspile, jsBundle)
//     ),
//     parallel(cssMinify, jsMinify),
//     publish
//   );

//exports.build = series(clean, parallel(css, javascript));