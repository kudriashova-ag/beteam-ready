var config = {
    path: {
        sass: './src/sass/**/*.scss',
        html: 'index.html'
    },
    output: {
        cssName: 'style.min.css',
        path: './dist/css'
    },
    images: {
        from: './dist/images/*.png',
        to: './dist/img'
    },
    isDevelopment: true
}

const { series, src, dest, watch } = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var cleanCss = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var gulpIf = require('gulp-if');
var browserSync = require('browser-sync').create();
// var gcmq = require('gulp-group-css-media-queries');
const webp = require('gulp-webp');

function scss(cb) {
    return src(config.path.sass)
        .pipe(gulpIf(config.isDevelopment, sourcemaps.init()))
        .pipe(sass())
        .pipe(concat(config.output.cssName))
        .pipe(autoprefixer())
        .pipe(cleanCss())
        // .pipe(gcmq())
        .pipe(gulpIf(config.isDevelopment, sourcemaps.write()))
        .pipe(dest(config.output.path));
    cb();
}

function serve(cb) {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });

    watch(config.path.sass, series(scss)).on('change', browserSync.reload);
    watch(config.path.html).on('change', browserSync.reload);
    cb();
}

function img(cb) {
    return src(config.images.from)
        .pipe(webp())
        .pipe(dest(config.images.to))
        cb()
    
}

    
exports.default = series(scss, serve)
