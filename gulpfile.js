var gulp = require('gulp');
var pug = require('gulp-pug');
var browserSync = require('browser-sync');
var sass = require("gulp-sass");
// отдельный watch
// var watch = require('gulp-watch');
var reload = browserSync.reload;
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
// костыль чтоб работать только с новыми картинками
var newer = require('gulp-newer');
var rimraf = require('rimraf');
var rigger = require('gulp-rigger');

var path = {
	src: {
		//исходные файлы
		pug: './src/html/**/*.pug',
		sass: './src/css/*.scss',
		js: './src/js/**/*.js',
		image: './src/img/**/*.*'
	},
	build: {
		//готовые файлы
		src: './build/html/',
		style: './build/css/',
		js: './build/js/',
		image: './build/img/'
	},
	watch: {
		//смотрим за изменениями
		pug: './src/html/**/*.pug',
		templates: './src/templates/**/*.pug',
		style: './src/css/**/*.scss',
		js: './src/js/**/*.js',
		image: './src/img/**/*.*'
	},
	clean: './build'

};

//папка для live server
var server = {
	server: {
		baseDir: './build'
	}
};

// удаление папки build. переменная нужна
gulp.task('clean', function(cb){
	rimraf(path.clean, cb)
})

gulp.task("html", function() {
	gulp.src(path.src.pug)
	.pipe(plumber())
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

//препроцессор sass build
gulp.task('sass:build', function () {
  return gulp.src( path.src.sass )
  	.pipe(plumber())
		//чтоб не выкинуло из консли.
    .pipe(sass().on('error', sass.logError))
    //вкл сжатие
    // .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(cssnano({
    	//не учитываем zindex
    	zindex: false
    }))
    .pipe(gulp.dest( path.build.style ))
});
//препроцессор sass dev
gulp.task('sass:dev', function () {
  return gulp.src( path.src.sass )
  	.pipe(plumber())
  	.pipe(sourcemaps.init())
		//чтоб не выкинуло из консли.
    .pipe(sass().on('error', sass.logError))
    //вкл сжатие
    // .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest( path.build.style ))
    .on('end', browserSync.reload);
});

// копируем js файлы
gulp.task('copyJs:dev', function(){
	gulp.src( path.src.js )
	.pipe(plumber())
	.pipe(rigger())
	.pipe(uglify())
	.pipe( gulp.dest( path.build.js ) )
	.on('end', browserSync.reload);
});
// копируем js файлы
gulp.task('copyJs:bulid', function(){
	gulp.src( path.src.js )
	.pipe(plumber())
	.pipe(rigger())
	.pipe(uglify())
	.pipe( gulp.dest( path.build.js ) )
});

//Наблюдаем
gulp.task("watch", function() {
	//встроенный watch
	gulp.watch(path.watch.pug, ['html']);
	gulp.watch(path.watch.templates, ['html']);
	gulp.watch(path.watch.style, ['sass:dev']);
	gulp.watch(path.watch.js, ['copyJs:dev']);
	gulp.watch(path.watch.image, ['image']);
	//отдельный gulp-watch
	// watch([path.watch.pug], function(event, cb){
	// 	gulp.start('html')
	// })
});

gulp.task('image', function () {
	gulp.src( path.src.image )
	.pipe(newer( path.src.image ))
	.pipe(imagemin({
	    progressive: true,
	    svgoPlugins: [{removeViewBox: false}],
	    use: [pngquant()],
	    interlaced: true,
	    options: {
	        cache: true
	    }
	}))
	.pipe(gulp.dest(path.build.image));
	// чтоб не после каждой изображения
	// .pipe(reload({stream: true}));
});

// development
gulp.task('dev', function(){
	gulp.start('html', 'sass:dev', 'copyJs:dev', 'image')
})

//build
gulp.task('build-project', function(){
	gulp.start('html', 'sass:build', 'copyJs:bulid', 'image')
})

// development
gulp.task('default', ['dev', 'watch', 'webserver']);
// build
gulp.task('build', ['build-project', 'watch', 'webserver']);
