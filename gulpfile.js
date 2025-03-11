const gulp = require('gulp');
const twig = require('gulp-twig');
const plumber = require('gulp-plumber');


function compileTwig(cb){
  gulp.src('src/*.twig')
  .pipe(plumber())
  .pipe(twig({data:{
    site:{
      title: 'english-academy'
    }
  }}))
  .pipe(gulp.dest('dist/'))
  cb();
}

function copyCSS(cb) {
  gulp.src('src/css/**/*.css') // Selecciona todos los archivos CSS en 'src/css'
    .pipe(gulp.dest('dist/css')); // Los copia a 'dist/css'
  cb();
}

function defaultTask() {
    gulp.watch('src/**/*.twig', compileTwig);
    gulp.watch('src/css/**/*.css', copyCSS);
}
  

exports.build = gulp.series(compileTwig, copyCSS);
exports.default = defaultTask