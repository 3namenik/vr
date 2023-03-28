var index_page = 'index.html';

var gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
var browserSync = require('browser-sync').create();
var purify = require('gulp-purifycss');
var pug = require('gulp-pug');
// var ssi = require('browsersync-ssi');

const svgSprite = require('gulp-svg-sprite');
const extReplace = require('gulp-ext-replace');
const imagemin = require('gulp-imagemin');
const imageminWebp = require('imagemin-webp');

function hello(done){
	//вотчеры 
	console.log("Hello, Ilya");
	
	done();
}


function sass_to_css(done){
	gulp.src('./src/**/*.scss')
		.pipe(sass({
			errorLogToConsole: true
		}))
		.on('error', console.error.bind(console))
		.pipe(gulp.dest('./dist/'))
		.pipe(browserSync.stream());
	done();
}

function scripts() {
	return gulp.src([
		'src/**/*.js'
	])
		// .pipe(concat('bundle.js'))
		// .pipe(gulp.dest('dist/js/'))
		// .pipe(uglify())
		// .pipe(rename(function (path) { path.basename += ".min"; }))
		.pipe(gulp.dest('./dist/'))
		.pipe(browserSync.stream());
}

function rush(done){
	browserSync.init({
	    server: {
	    	host: "192.168.1.1",
			baseDir: 'dist',
			// middleware: ssi({
			//   	baseDir: __dirname + '/app',
			//   	ext: '.html'
			// }),
			index: index_page,
	    },
	    host: "localhost",
	    localOnly: true,
	    port: 8080,
	    notify: false,
	    tunnel: false,
		online: true
	});	

	//работает
	gulp.watch('src/**/*.scss', sass_to_css);
	gulp.watch('src/**/*.js', scripts);
	gulp.watch('src/local/libs/**/*', libs);
	gulp.watch('src/local/fonts/**/*', fonts);
	gulp.watch('./src/local/img/**/*', img);
	gulp.watch('src/local/img/sprite-svg/*.svg', spriteSvg);

	gulp.watch('./src/**/*.html').on('change', () => {
		return gulp.src([
			'./src/**/*.html',
		])
			.pipe(gulp.dest('dist/'))
			.pipe(browserSync.stream());
	});

	/* меняет весь скоп файлов, хз что будет когда файлов будет 100+ */
	gulp.watch('src/**/*.pug', () => {
		return gulp.src('src/**/*.pug')
			.pipe(pug({
				pretty: true
			}))
			.pipe(gulp.dest('dist/'))
			.pipe(browserSync.stream());
	});	

	gulp.watch([
		'src/local/img/**/*.jpg',
		'src/local/img/**/*.png'
	], create_webp);

}

function spriteSvg() {
	return gulp.src('./src/local/img/sprite-svg/*.svg')
		.pipe(svgSprite({
			mode: {
				stack: {
					sprite: "../sprite.svg"
				}
			},
		}
		))
		.pipe(gulp.dest('dist/local/img/'))
		.pipe(browserSync.stream());
}

function create_webp(){
	return gulp.src([
		'./src/local/img/**/*.jpg',
		'./src/local/img/**/*.png'
	]).pipe(
		imagemin([
			imageminWebp({quality: 100})
		])
	).pipe(
		extReplace('.webp')
	).pipe(gulp.dest('dist/local/img'))
}



function fonts() {
	return gulp.src('src/local/fonts/**/*')
		.pipe(gulp.dest('dist/local/fonts/'))
		.pipe(browserSync.stream());
}

function img() {
	return gulp.src([
		'./src/local/img/**/*',
		'!./src/local/img/sprite-svg',
		'!./src/local/img/sprite-svg/**/*'
	]).pipe(
		gulp.dest('dist/local/img/')
	).pipe(browserSync.stream());
}

function libs() {
	return gulp.src([
		'./src/local/libs/**/*',
	])
		.pipe(gulp.dest('dist/local/libs/'))
		.pipe(browserSync.stream());
}

function uncss(done){
	gulp.src('./src/style.css')
		.pipe(purify(['./src/*.html']))
		.pipe(gulp.dest('./src/complete'));
	done();
}

exports.spriteSvg = spriteSvg;
exports.create_webp = create_webp;
exports.fonts = fonts;
exports.libs = libs;
exports.img = img;

exports.default = gulp.series(hello, rush);
exports.sass_to_css = sass_to_css;
exports.uncss = uncss;
