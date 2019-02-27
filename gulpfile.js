var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function(){
    console.log('DEFAULT');
});

gulp.task('html', function(){
    console.log('HTML');
});

gulp.task('styles', function(){
    console.log('style');
});


gulp.task('watch', function() {
    watch('./app/index.html', function(){
        gulp.start('html');
    });

    watch('./app/assets/styles/**/*.css', function(){
        gulp.start('styles');
    });
})