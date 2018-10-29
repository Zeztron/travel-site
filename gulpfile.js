var gulp    = require("gulp"),
    watch   = require("gulp-watch");
gulp.task("default", function(done) {
  console.log("Hurray, you created a gulp task!");
  done();
});

gulp.task("html", function(done) {
  console.log("Imagine something useful done to your HTML here");
  done();
});

gulp.task("styles", function(done) {
  console.log("Imagine SASS or PostCSS tasks running here");
  done();
});

gulp.task("watch", function(done) {


  watch("./app/index.html", function() {
    gulp.start("html");
  });

  watch("./app/assets/styles/**/*.css", function() {
    gulp.start("styles");
  });
});
