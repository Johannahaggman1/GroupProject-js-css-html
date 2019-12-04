const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();


// Compile all SCSS vi har till CSS 
function style() {
  // hitta scss filerna 
  return gulp.src('./sass/**/*.scss')
    // skicka scss genom compilern
  .pipe(sass())
  // Vart ska jag spotta ut den nya CSS koden
  .pipe(gulp.dest('./css'))
  // stream ändringar till webbläsaren.
  .pipe(browserSync.stream());
}

// Kollar på alla filer och uppdaterar webbläsaren ifall något ändras.
function watch() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch('./sass/**/*.scss', style);
  gulp.watch('./index.html').on('change', browserSync.reload);
  gulp.watch('./pages/**/*.html').on('change', browserSync.reload);
  gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

// exportera så att du kan använda kommandon såsom 'gulp style'
exports.style = style;
exports.watch = watch;