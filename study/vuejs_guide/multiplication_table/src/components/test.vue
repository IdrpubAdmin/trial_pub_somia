<template>
    <div class="title">
      <h1>{{ title }}</h1>
      <p>{{ subTitle }}</p>
    </div>
</template>

<script>
export default {
    name: 'title',
    data () {
      return {
        prop: ['title', 'subTitle']
      }
    }
}
</script>

<style scoped>
    h1 { color:aqua; }
</style>