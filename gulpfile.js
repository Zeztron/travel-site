var gulp         = require("gulp"),
    watch        = require("gulp-watch"),
    postcss      = require("gulp-postcss"),
    cssvars      = require("postcss-simple-vars"),
    nested       = require("postcss-nested"),
    cssImport    = require("postcss-import"),
    autoprefixer = require("autoprefixer");
    browserSync  = require("browser-sync"). create();

gulp.task("default", function(done) {
  console.log("Hurray, you created a gulp task!");
  done();
});

gulp.task("html", function(done) {
  console.log("Imagine something useful done to your HTML here");
  done();
});

gulp.task("styles", function(done) {
  return gulp.src("./app/assets/styles/styles.css")
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest("./app/temp/styles"));
});

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
