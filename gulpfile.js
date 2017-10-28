var gulp = require('gulp'),
sass = require('gulp-sass'),
concat = require('gulp-concat'),
uglify = require('gulp-uglifyjs'),
cssnano = require('gulp-cssnano'),
rename = require('gulp-rename'),
del = require('del'),
imagemin = require('gulp-imagemin'),
pngquant = require('imagemin-pngquant');

gulp.task('sass', function(){
 	return gulp.src(['app/sass/**/*.scss','app/sass/**/*.sass'])
 	.pipe(sass())
	.pipe(gulp.dest('app/css'));
});
gulp.task('scripts',function(){
	return gulp.src([
		'app/libs/jquery/dist/jquery.min.js',
		'app/libs/jquery-migrate/jquery-migrate.min.js',
		'app/libs/slick-carousel/slick/slick.min.js',
		'app/libs/js/comon.js'
		])
	.pipe(concat('libs.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('app/js'))
});
gulp.task('css-libs',function(){
	return gulp.src('app/css/libs.css')
	.pipe(cssnano())
	.pipe(rename({suffix:'.min'}))
	.pipe(gulp.dest('app/css'));
});

gulp.task('clean', function(){
	return del.sync('dist')
})

gulp.task('img', function(){
	return gulp.src('app/img/**/*')
	.pipe(imagemin({
		interlaced:true,
		progressive:true,
		svgoPlugins:[{removeWiewBox:false}],
		une:[pngquant()]
	}))
	.pipe(gulp.dest('dist/img'))
})

gulp.task('watch',['sass','scripts','css-libs'], function(){
	gulp.watch('app/sass/**/*.scss', [sass]);
});


gulp.task('build',['clean','img', 'sass','scripts'], function(){

	var buildCss = gulp.src([
			'app/css/style.css',
			'app/css/media.css',
			'app/css/libs.min.css'
		])
	
	.pipe(gulp.dest('dist/css'));
	
	var buildFont = gulp.src('app/font/**/*')
	
	.pipe(gulp.dest('dist/font'));
	
	var buildJs = gulp.src('app/js/**/*')

	.pipe(gulp.dest('dist/js'));

	var buildHtml = gulp.src('app/*.html')

	.pipe(gulp.dest('dist'));
})
