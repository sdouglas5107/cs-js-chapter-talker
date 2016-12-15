'use script';
let gulp = require('gulp');
let nodemon = require('gulp-nodemon');
let jshint = require('gulp-jshint');

gulp.task('jshint', () => {
    gulp.src('./**/*.js').pipe(jshint());
});

gulp.task('server', () => {
    nodemon({
        script: 'app.js',
        watch: './**/*.js',
        tasks: ['jshint']
    });
});

gulp.task('default', ['server']);