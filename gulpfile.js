const gulp = require('gulp');
const sass = require('gulp-sass');
//const browserSync = require('browser-sync').create();

gulp.task('watch', function () {
    gulp.watch('./app/scss/*.scss', gulp.series('sass'));
    //gulp.watch('app/scss/**/*.scss', ['sass']); 
});

gulp.task('sass', function(){
    return gulp.src('app/scss/styles.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('app/css'))
    //.pipe(browserSync.reload({
      //  stream: true
      //}))
});

// gulp.task('browserSync', function() {
//     browserSync.init({
//         server: {
//             baseDir: 'app'
//         },
//     })
// })

