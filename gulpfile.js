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
  gulp.src('css/**/*.css') // Selecciona todos los archivos CSS en 'src/css'
    .pipe(plumber()) // Maneja errores
    .pipe(gulp.dest('dist/css')); // Los copia a 'dist/css'
  cb();
}

function copyAssets(cb) {
  gulp.src('assets/**/*') // Copia todos los archivos dentro de 'src/assets'
    .pipe(plumber()) // Maneja errores
    .pipe(gulp.dest('dist/assets')); // Los mueve a 'dist/assets'
  cb();
}


function defaultTask() {
    gulp.watch('src/**/*.twig', compileTwig);
    gulp.watch('css/**/*.css', copyCSS);
    gulp.watch('assets/**/*', copyAssets);
}
  

exports.build = gulp.series(compileTwig, copyCSS, copyAssets);
exports.default = defaultTask