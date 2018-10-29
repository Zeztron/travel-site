var gulp         = require("gulp"),
    watch        = require("gulp-watch"),
    postcss      = require("gulp-postcss"),
    cssvars      = require("postcss-simple-vars"),
    nested       = require("postcss-nested"),
    autoprefixer = require("autoprefixer");

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
    .pipe(postcss([cssvars, nested, autoprefixer]))
    .pipe(gulp.dest("./app/temp/styles"));
});

gulp.task("watch", function(done) {


  watch("./app/index.html", function() {
    gulp.start("html");
  });

  watch("./app/assets/styles/**/*.css", function() {
    gulp.start("styles");
  });
});
