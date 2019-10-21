var gulp = require('gulp')
var less = require('gulp-less')
var sourcemaps = require('gulp-sourcemaps');

gulp.task('compileLess', function(done) {
  gulp.src('src/*/style/index.less')
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('src'));
    done()
})

gulp.task('watch', function() {
  gulp.watch('src/**/*.less', gulp.series('compileLess'))
})