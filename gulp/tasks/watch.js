var gulp         = require("gulp"),
    watch        = require("gulp-watch"),
    browserSync  = require("browser-sync"). create();

gulp.task("watch", function(done) {

  // Auto refresh browser
  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });

  // watch the html
  watch("./app/index.html", function() {
    browserSync.reload();
  });

  // watch the css
  watch("./app/assets/styles/**/*.css", function() {
    gulp.start("cssInject");
  });

});

gulp.task("cssInject", ["styles"],function() {
  return gulp.src("./app/temp/styles/styles.css").pipe(browserSync.stream());
});
