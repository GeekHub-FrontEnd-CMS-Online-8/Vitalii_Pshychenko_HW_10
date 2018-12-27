var gulp       = require('gulp'), // Подключаем Gulp
	sass         = require('gulp-sass'), //Подключаем Sass пакет,
	browserSync  = require('browser-sync'), // Подключаем Browser Sync
	autoprefixer = require('gulp-autoprefixer');// Подключаем библиотеку для автоматического добавления префиксов

gulp.task('sass', function(){ // Создаем таск Sass
	return gulp.src('app/sass/**/*.sass') // Берем источник
		.pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
		.pipe(gulp.dest('dist/css')) // Выгружаем результата в папку app/css
		.pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

gulp.task('html', function () {
    return gulp.src("app/**/*.html")
        .pipe(gulp.dest("dist"))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('img', function() {
	return gulp.src('app/img/**/*')
		.pipe(gulp.dest('dist/img'))
});

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: './dist'
		},
		notify: false
	});
});




gulp.task('watch', function() {
	gulp.watch('app/sass/**/*.sass', gulp.parallel('sass')); // Наблюдение за sass файлами в папке sass
	gulp.watch('app/*.html');
});



 gulp.task('default', gulp.parallel('watch', 'sass', 'html', 'img', 'browser-sync', ));
