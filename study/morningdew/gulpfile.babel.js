import gulp from "gulp";
import del from "del";
import ws from "gulp-webserver";
import image from "gulp-image";
import autop from "gulp-autoprefixer";
// import miniCSS from "gulp-csso";
// import bro from "gulp-bro";
// import babelify from "babelify";
import extender from "gulp-html-extend"

const sass = require("gulp-sass")(require("node-sass"));

const routes = {
    html: {
        watch: "src/**/*.html",
        src: "src/*.html",
        dest: "build"
    },
    img: {
        src: "src/img/**/*",
        dest: "build/img"
    },
    scss: {
        watch: "src/scss/**/*.scss",
        src: "src/scss/style.scss",
        dest: "build/css"
    },
    js: {
        watch: "src/js/**/*.js",
        src: "src/js/main.js", 
        dest: "build/js"
    },
    font: {
        watch:"src/fonts/*.{ttf,woff2,woff,eot}",
        src: "src/fonts/*.{ttf,woff2,woff,eot}",
        dest: "build/fonts"
    },
    plugIn : {
        watch:"src/plugin/**/*.{js,css}",
        src: "src/plugin/**/*.{js,css}",
        dest: "build/plugin"
    }
};

const html = () => 
    gulp
        .src(routes.html.src)
        .pipe(extender()) 
        .pipe(gulp.dest(routes.html.dest));  

const clean = () => del(["build"]);  
 
const webserver = () =>
    gulp.src("build").pipe(ws({ livereload: true, open: true }));  

const img = () =>
    gulp
        .src(routes.img.src)
        .pipe(image())
        .pipe(gulp.dest(routes.img.dest));

const styles = () =>
    gulp
        .src(routes.scss.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(autop())
        // .pipe(miniCSS())
        .pipe(gulp.dest(routes.scss.dest));

// const js = () =>
//     gulp
//         .src(routes.js.src)
//         .pipe(
//             bro({
//                 transform: [
//                     babelify.configure({ presets: ['@babel/preset-env'] }),
//                     [ 'uglifyify', { global: true }]
//                 ]
//             })
//         )
//         .pipe(gulp.dest(routes.js.dest));

const js = () =>
    gulp.src(routes.js.src)
        .pipe(gulp.dest(routes.js.dest));

const fonts = () =>
    gulp.src(routes.font.src)
        .pipe(gulp.dest(routes.font.dest));

const plugIn = () =>
    gulp.src(routes.plugIn.src)
        .pipe(gulp.dest(routes.plugIn.dest));

const watch = () => {
    gulp.watch(routes.html.watch, html);
    gulp.watch(routes.img.src, img);
    gulp.watch(routes.scss.watch, styles);
    gulp.watch(routes.js.watch, js);
};

         
const prepare = gulp.series([clean, img, fonts]); 

const assets = gulp.series([html, styles, js, plugIn]);

const live = gulp.parallel([webserver, watch]);

export const dev = gulp.series([prepare, assets, live]);