import Vue from 'vue';
import VueRouter from 'vue-router';

// 연결할 컴포넌트
import Home from './components/Home';
import About from './components/About';

// 필수. Vue와 VueRouter 연결
Vue.use(VueRouter);

// 사용할 route 설정
const route = [
    {
        path: "/",
        name: 'Home', 
        component: Home
    }, 
    {
        path: "/about",
        name: 'About',
        component: About
    }, 
];

// Vue 라우터 인스턴스 생성 VueRouter에 route를 등록하고 설정 /  history = 자연스러운 url, 
const router = new VueRouter({
    mode: 'history',
    routes: route
});

// 설정한 router를 내보내기
export default router;