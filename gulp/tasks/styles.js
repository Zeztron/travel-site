var gulp         = require("gulp"),
    postcss      = require("gulp-postcss"),
    cssvars      = require("postcss-simple-vars"),
    nested       = require("postcss-nested"),
    cssImport    = require("postcss-import"),
    autoprefixer = require("autoprefixer");

gulp.task("styles", function(done) {
  return gulp.src("./app/assets/styles/styles.css")
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest("./app/temp/styles"));
});
