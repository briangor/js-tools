const gulp = require('gulp');
const { src, dest, watch, series, parallel } = require('gulp');
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const sass = require('gulp-sass')(require('sass'));
//const imagemin = require('gulp-imagemin');
const Server = require('karma').Server;

const jsPath = './app/assets/js/*.js';
const sassPath = './app/assets/scss/**/*.scss';
const cssPath = './app/assets/css/**/*.css';
const htmlPath = 'index.html';

function generateCSS() {
    return src(sassPath)
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('app/assets/css'));

}

function minifyJS() {
    return src(jsPath)
        .pipe(sourcemaps.init())
        .pipe(concat('all.js'))
        .pipe(terser())
        .pipe(sourcemaps.write('.'))
        .pipe(dest('dist/assets/js'));
}

function minifyCSS() {
    return src(cssPath)
        .pipe(sourcemaps.init())
        .pipe(concat('style.css'))
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('dist/assets/css'));
}

function generateHTML() {
    return src(htmlPath)
    .pipe(dest('dist'));
}

// function minifyImage() {
//     return src('app/images/*')
//         .pipe(imagemin())
//         .pipe(dest('dist/images/'));
// }


function test(done) {
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
      }, done).start();
}

function watchTask() {
    watch([cssPath, jsPath], { interval: 1000 }, series(parallel(generateCSS, minifyJS), minifyCSS));
}

exports.js = minifyJS;
//exports.default = series(minifyJS, minifyCSS);
//exports.default = parallel(generateHTML, generateCSS);
//exports.default = series(parallel(generateCSS, minifyJS), minifyCSS, watchTask);
exports.default = series(parallel(generateHTML, generateCSS, minifyJS), minifyCSS, test);
 exports.test = test;