const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const htmlmin = require("gulp-htmlmin");
const uglify = require("gulp-uglify");
const sync = require("browser-sync").create();
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");
const svgstore = require("gulp-svgstore");
const del = require("del");


// Styles
const styles = () => {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(csso())
    .pipe(rename("styles.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(sync.stream());
};

exports.styles = styles;

//Js
const scripts = () => {
  return gulp.src("source/js/*.js")
    .pipe(uglify())
    .pipe(rename("script.min.js"))
    .pipe(gulp.dest("build/js"))
    .pipe(sync.stream());
};

exports.scripts = scripts;


//Images
const images = () => {
  return gulp.src("source/img/*")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.mozjpeg({progressive: true}),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("build/img"))
};

exports.images = images;

//Webpimg
const webpimg = () => {
  return gulp.src("source/img/**/*.{png, jpg}")
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest("source/img"))
};

exports.webp = webpimg;
//task = function

//Sprite
const sprite = () => {
  return gulp.src("source/img/*.svg")
    .pipe(svgstore())
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("build/img"))
};

exports.sprite = sprite;

// Server
const server = (done) => {
  sync.init({
    server: {
      baseDir: "build"
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
};

exports.server = server;

// Watcher
const watcher = () => {
  gulp.watch("source/sass/**/*.scss", gulp.series("styles"));
  gulp.watch("source/js/**/*.js", gulp.series("scripts"));
  gulp.watch("source/**/*.html", gulp.series("html"));
  // gulp.watch("html").on("change", sync.reload);
};

exports.default = gulp.series(
  styles, server, watcher
);

// Clean
const clean = () => {
  return del("build");
};

exports.clean = clean;

//Copy
const copy = () => {
  return gulp.src([
    "source/fonts/*.{woff, woff2}",
    "source/img/**",
    "source/js/*",
    "source/*.ico"
  ], {
    base: "build"
  })
  .pipe(gulp.dest("build"));
};

exports.copy = copy;


// Html
const html = () => {
  return gulp.src("source/*.html")
  // .pipe(htmlmin())
  // .pipe(rename({
  //   suffix: "-min"
  // }))
  .pipe(gulp.dest("build"))
  .pipe(sync.stream());
};

exports.html = html;


// Build task
const build = gulp.series(
  clean,
  copy,
  styles,
  scripts,
  images,
  sprite,
  html
);

exports.build = build;

const start = gulp.series(
  build,
  server,
  watcher
);

exports.start = start;
