// vue.config.js - webpack 설정을 하는 곳 
module.exports = {
    // true를 하지 않으면 동적으로 페이지 렌더링 불가능
    runtimeCompiler: true,
    pages: {
      default: {
        // 진입점 js 경로
        entry: 'src/main/main.js',
        template: 'public/index.html',
        // 빌드 후 생성될 파일명 지정
        filename: 'index.html'
      },
      login: {
        entry: 'src/login/main.js',
        template: 'public/index.html',
        filename: 'login.html'
      }
    },
  };