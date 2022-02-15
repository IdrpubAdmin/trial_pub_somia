<template>

<div id="root">
  <div>{{ first }} 곱하기 {{ second }}는? </div>
  <form>
    <input type="number" v-model="value">
    <button>입력</button>
  </form>
  <div class="result"></div>
</div>

</template>

<script>


export default {
  name: 'App',
  // 나는 ES5표기법을 사용
  data() {
    return {
      first: Math.ceil(Math.random() * 9 ),
      second: Math.ceil(Math.random() * 9 ),
      value: '',
      result: '',
    }
  },
  methods: {
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
  margin-top: 60px;
}
</style>
