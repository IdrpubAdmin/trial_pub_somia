<template>


<div id="root">
  <h2>구구단</h2>
  <div>{{ first }} 곱하기 {{ second }}는? </div>
  <form @submit = "onSubmitForm" >
    <input type="number" ref="answer" v-model="value[0]">
    <button type="submit">입력</button>
  </form>
  <div id="result">{{ result[0] }}</div>
</div>

<div id="root1">
  <h2>끝말잇기</h2>
  <div>{{ word }}</div>
  <form @submit = "onSubmitForm1">
    <input type="text" v-model="value[1]"> 
    <button type="submit">입력</button>
    <div>{{ result[1] }}</div>
  </form>
</div>

</template>

<script>


export default {
  name: 'app',
  el :[ "#root", "#root1" ],
  props: ['startWord'],
  data() {
    console.log(this);
    return {
      first: Math.ceil(Math.random() * 9 ),
      second: Math.ceil(Math.random() * 9 ),
      value: ['', ''],
      result: ['', ''],
      word: '칼국수',
      text: 'hi from data'
    }
  },
  methods: {
      onSubmitForm(e) {
        e.preventDefault();
        console.log(this.first, this.second, this.value[0]);
        if ( this.first * this.second === this.value[0]) {
          this.result[0] = '정답';
          this.first =  Math.ceil(Math.random() * 9 );
          this.second = Math.ceil(Math.random() * 9 );
          this.value[0] = '';
          this.$refs.answer;
        } else {
          this.result[0] = '땡';
          this.value[0] = '';
        }
    },
    onSubmitForm1(e) {
      e.preventDefault();
      if (this.word[this.word.length - 1] === this.value[1]) {
        this.result[1] = "딩동댕";
        // "수"일 경우만 딩동댕 뜨는데 이거 확인 필요
        this.word = this.value;
        this.value[1] = '';
      } else {
        this.result[1] = "땡";
        this.value[1] = '';
      }
    }
  },
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

#root1 {
  margin-top: 100px; 
}
</style>
