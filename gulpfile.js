const gulp = require('gulp');
const twig = require('gulp-twig');
const plumber = require('gulp-plumber');


function compileTwig(cb){
  gulp.src('src/*.twig')
  .pipe(plumber())
  .pipe(twig({data:{
    site:{
      title: 'confident english'
    }
  }}))
  .pipe(gulp.dest('dist/'))
  cb();
}

function defaultTask() {
    gulp.watch('src/**/*.twig', compileTwig);
}
  

exports.build = compileTwig
exports.default = defaultTask