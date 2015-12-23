var gulp = require('gulp'),
    concat = require('gulp-concat');
    
gulp.task('concat', function () {
    return gulp.src([
        'src/Layers.js',
        'src/Sys/*.js',
        'src/Game/*.js',
        'src/Data/*.js',
        'src/Run.js'
    ])
        .pipe(concat('chess.js'))
        .pipe(gulp.dest('out/'));
});

gulp.task('default', ['concat']);
