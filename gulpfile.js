'use script';
let gulp = require('gulp');
let nodemon = require('gulp-nodemon');
let jshint = require('gulp-jshint');

gulp.task('server', () => {
    nodemon({
        script: 'app.js',
        watch: '*.js'
    });
});

gulp.task('default', ['server']);