<template>
  <div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {
    this.axios.get('/ss/book/listbook')
  }
}
</script>

<style scoped>

</style>
