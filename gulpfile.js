const path = require('path')
const gulp = require('gulp')
const postcss = require('gulp-postcss')
const sass = require('gulp-sass')

const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const mqpacker = require('css-mqpacker')
const cssPath = './assets/themes/dansnow-theme/css'

gulp.task('css', () => {
  const processors = [
    autoprefixer,
    mqpacker,
    cssnano
  ]

  return gulp.src(path.join(cssPath, 'style.scss'))
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(gulp.dest(cssPath))
})

gulp.task('watch', ['css'], () => {
  gulp.watch(path.join(cssPath, '**', '*.scss'), ['css'])
})

gulp.task('default', ['css'])

