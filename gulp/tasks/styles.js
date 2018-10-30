var gulp         = require("gulp"),
    postcss      = require("gulp-postcss"),
    cssvars      = require("postcss-simple-vars"),
    mixins       = require("postcss-mixins"),
    nested       = require("postcss-nested"),
    cssImport    = require("postcss-import"),
    hexrgba      = require("postcss-hexrgba"),
    autoprefixer = require("autoprefixer");

gulp.task("styles", function(done) {
  return gulp.src("./app/assets/styles/styles.css")
    .pipe(postcss([cssImport, mixins, cssvars, nested, hexrgba, autoprefixer]))
    .on("error", function(errorInfo) {
      console.log(errorInfo.toString());
      this.emit("end");
    })
    .pipe(gulp.dest("./app/temp/styles"));
});
