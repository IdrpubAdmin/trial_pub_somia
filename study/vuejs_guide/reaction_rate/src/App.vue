<template>
  <div>
    <div id="screen" :class="state"  @click="onclickScreen">{{ message }}</div>
    <div>
      <div>평균 시간: {{ result.reduce((a, c ) => a + c, 0) / result.length || 0 }}ms</div>
      <button type="button" @click="onReset">리셋</button>
    </div>
  </div>
</template>

<script>

let startTime = 0;
let endTime = 0;
let timeout = null;

export default {
  data () {
    return {
      result: [],
      // class를 나타내는 데이터
      state: 'waiting',
      message: '클릭해서 시작하세요.',
    };
  },
  methods: {
    onReset () {
      this.result = [];
    },
    onclickScreen () {
      if (this.state === 'waiting') {
          this.state = 'ready';
          this.message = '초록색이 되면 클릭하세요';
          // settimeout - 만료된 후 함수나 지정한 코드 조각을 실행하는 타이머를 설정함
          timeout = setTimeout(() => {
            this.state = 'now';
            this.message = '지금 클릭!';
            startTime = new Date ();
          }, Math.floor(Math.random() * 1000 ) + 2000); // 2~3초
      } else if ( this.state === 'ready') {
        clearTimeout(timeout);
        this.state ='waiting';
        this.message = '너무 성급함 초록색 된다음에 클릭하삼';
      } else if ( this.state === 'now' ) {
        endTime = new Date ();
        this.state = 'waiting';
        this.message = '클릭해서 시작하삼'
        this.result.push( endTime - startTime );
      }
    }
  },
};
</script>

<style scoped>
 #screen {
   width: 300px;
   height: 200px;
   text-align: center;
   user-select: none;
 }

 #screen.waiting {
   background-color: aqua;
 }
 #screen.ready {
   background-color: red;
   color: #fff;
 }
 #screen.now {
   background-color: greenyellow;
 }
</style>
