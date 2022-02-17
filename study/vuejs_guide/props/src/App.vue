<template>
  <div>
  <message text="hello" />
  <message text="hello2" />
  
  </div>
</template>

<script>
import message from './components/message.vue'

export default {
  components: {
    message
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
</style>
