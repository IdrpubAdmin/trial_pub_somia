<template>

  <!-- 열려있는 상태값 지정 / true -->
  <div class="black-bg"  v-if="modalOpen == true">
    <div class="white-bg">
      <h4>상세페이지임</h4>
      <p>상세페이지 내용임</p>
      <button class="close" @click="modalOpen = false">닫기</button>
    </div>
  </div>


  <div class="menu">
    <a href="#none" v-for="메뉴목록 in menuList" :key="메뉴목록">{{ 메뉴목록 }}</a>
  </div>

<!-- import / export를 사용한 데이터 불러오기 -->
  <div>
    <img :src="rooms[0].image" alt="" class="room-img">
    <h4>{{ rooms[0].title }}</h4>
    <p >{{ rooms[0].price }}원</p>
  </div>  

  <div>
    <img :src="rooms[1].image" alt="" class="room-img">
    <h4>{{ rooms[1].title }}</h4>
    <p >{{ rooms[1].price }}원</p>
  </div>

  <div>
    <img :src="rooms[2].image" alt="" class="room-img">
    <h4>{{ rooms[2].title }}</h4>
    <p >{{ rooms[2].price }}원</p>
  </div> 

  <div>
    <img :src="rooms[3].image" alt="" class="room-img">
    <h4>{{ rooms[3].title }}</h4>
    <p >{{ rooms[3].price }}원</p>
  </div> 

  <div>
    <img :src="rooms[4].image" alt="" class="room-img">
    <h4>{{ rooms[4].title }}</h4>
    <p >{{ rooms[4].price }}원</p>
  </div>

  <div>
    <img :src="rooms[5].image" alt="" class="room-img">
    <h4>{{ rooms[5].title }}</h4>
    <p >{{ rooms[5].price }}원</p>
  </div> 

  
<!-- v-if를 사용한 모달창 생성 -->
  <!-- <div>
    <img src="./assets/room0.jpg" alt="" class="room-img" v>
    <h4 :style="bold" @click="modalOpen = true">{{ products [0] }}</h4>
    <p >{{ price [0] }} 만원</p>
    <button @click ="신고수[0]++">허위매물신고</button>
    <span>신고수 : {{ 신고수[0] }}</span>
  </div>

  <div>
    <img src="./assets/room1.jpg" alt="" class="room-img">
    <h4 @click="modalOpen = true">{{ products [1] }}</h4>
    <p>{{ price [1] }} 만원</p>
    <button @click ="신고수[1]++">허위매물신고</button>
    <span>신고수 : {{ 신고수[1] }}</span>
  </div>

  <div>
    <img src="./assets/room2.jpg" alt="" class="room-img">
    <h4 @click="modalOpen = true">{{ products [2] }}</h4>
    <p>{{ price [2] }} 만원</p>
    <button @click ="신고수[2]++">허위매물신고</button>
    <span>신고수 : {{ 신고수 [2] }}</span>
  </div> -->


<!-- v-for 반복문을 이용한 이벤트 핸들러 문법 -->
  <!-- <div v-for="(productList, i ) in 3" :key="i">
    <h4>{{ products[i] }}</h4>
    <p>{{ price[i] }}</p>
    <button @click ="신고수[i]++">허위매물신고</button>
    <span>신고수: {{ 신고수[i] }}</span>
  </div> -->


<!-- v-for 반복문을 사용한 방법 -->
  <!-- <div v-for="(productList, i) in products" :key="i">
    <h4 :style="bold">{{ products[i] }}</h4>
    <p>{{ price [i] }} 만원</p>
  </div> -->
  


</template>

<script>

import data from './assets/post.js';

export default {
  name: 'App',
  data(){
    return {
      rooms : data,
      //열리지 않은 현재의 상태값 false / 열린 상태값 true
      modalOpen : false, 
      price : [ 60, 70, 80 ],
      bold : " style: bold ",
      신고수 : [0, 0, 0],
      menuList : [ "Home", "Shop", "About" ],
      products : [ '역삼동원룸', '천호동원룸', '마포구원룸'],
    }
  },
  methods: {
    increase(){
      this.신고수 += 1;
    }
  },

  components: {
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


body {
  margin: 0;
}

div { 
  box-sizing: border-box;
}

.black-bg { 
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.5);
  position: fixed;
  padding: 20px;
}

.white-bg {
  width: 100%;
  background: #fff;
  border-radius: 8px;
  padding: 20px;
}

button.close {
  position: absolute;
  top: 30px;
  right: 30px
}

.room-img {
  width: 100%;
  margin-top: 40px; 
 }

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: #fff;
  text-decoration: none;
  padding: 10px; 
}


</style>
