<template>
    <div class="title">
      <button>{{btnText}}</button>
    </div>
</template>

<script>
export default {
    name: 'top',
    data () {
      return {
        prop : ['btnText']
      }
    },
}
</script>

<style scoped>
    h1 { color:rgb(209, 28, 28); }
</style>