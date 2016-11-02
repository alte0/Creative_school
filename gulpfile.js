var gulp = require('gulp');
var pug = require('gulp-pug');
var browserSync = require('browser-sync');
var sass = require("gulp-sass");
// var watch = require('gulp-watch');
var reload = browserSync.reload;

var path = {
	src: {
		//исходные файлы
		pug: './src/html/**/*.pug',
		sass: './src/css/**/*.scss',
		js: './src/js/**/*.js'
	},
	build: {
		//готовые файлы
		src: './build/html/',
		style: './build/css/',
		js: './build/js/'
	},
	watch: {
		//смотрим за изменениями
		pug: './src/html/**/*.pug',
		templates: './src/templates/**/*.pug',
		style: './src/css/**/*.scss',
		js: './src/js/**/*.js'
	}

};

//папка для live server
var server = {
	server: {
		baseDir: './build'
	}
};


gulp.task("html", function() {
	gulp.src(path.src.pug)
	.pipe(pug({
		pretty: true
	}))
	.pipe(gulp.dest(path.build.src))
	.on('end', browserSync.reload);
});

//browserSync
gulp.task("webserver", function() {
	browserSync(server);
});

//препроцессор sass
gulp.task('sass', function () {
  return gulp.src( path.src.sass )
		//чтоб не выкинуло из консли.
    .pipe(sass().on('error', sass.logError))
    //вкл сжатие
    // .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest( path.build.style ))
    .on('end', browserSync.reload);
});

// копируем js файлы
gulp.task('copyJs', function(){

	gulp.src( path.src.js ).pipe( gulp.dest( path.build.js ) )
	.on('end', browserSync.reload);

});

//Наблюдаем
gulp.task("watch", function() {
	//встроенный watch
	gulp.watch(path.watch.pug, ['html']);
	gulp.watch(path.watch.templates, ['html']);
	gulp.watch(path.watch.style, ['sass']);
	gulp.watch(path.watch.js, ['copyJs']);
	//отдельный gulp-watch
	// watch([path.watch.pug], function(event, cb){
	// 	gulp.start('html')
	// })
});


gulp.task('default', ['html', 'sass', 'copyJs', 'watch', 'webserver']);
