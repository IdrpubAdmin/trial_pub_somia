<template>

  <div class="menu">
    <a href="#none" v-for="메뉴목록 in menuList" :key="메뉴목록">{{ 메뉴목록 }}</a>
  </div>

  <img alt="Vue logo" src="./assets/logo.png">


  <div>
    <h4 :style="bold">{{ products [0] }}</h4>
    <p >{{ price [0] }} 만원</p>
  </div>

  <div>
    <h4 :style="bold">{{ products [1] }}</h4>
    <p>{{ price [1] }} 만원</p>
  </div>

    <div>
    <h4 :style="bold">{{ products [2] }}</h4>
    <p>{{ price [2] }} 만원</p>
  </div>

  <!-- v-for 반복문을 사용한 방법 -->
  <!-- <div v-for="(productList, i) in products" :key="i">
    <h4 :style="bold">{{ products[i] }}</h4>
    <p>{{ price [i] }} 만원</p>
  </div> -->

</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      price : [ 60, 70, 80 ],
      bold : " style: bold ",
      menuList : [ "Home", "Shop", "About" ],
      products : [ '역삼동원룸', '천호동원룸', '마포구원룸'],
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
