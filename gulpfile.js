// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

gulp.task('theme-sass', function() {
    gulp.src('source/css/*.scss').pipe(sass({outputStyle : 'compressed'}).on('error', sass.logError)).pipe(gulp.dest(function(f) {
        return f.base;
    }));

    // gulp.src('source/css/*.scss')
    //     .pipe(sass().on('error', sass.logError))
    //     .pipe(minify())
    //     .pipe(rename({ suffix: '.min' }))
    //     .pipe(gulp.dest(function (f) {
    //         return f.base;
    //     }));
});

gulp.task('default', [ 'theme-sass' ], function() {
    gulp.watch('source/css/**/*.scss', [ 'theme-sass' ]);
})