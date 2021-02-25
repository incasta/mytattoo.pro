<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <app-icon name='info'></app-icon>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
  }
}
</script>

<style lang="scss" scoped>
img {
  margin: 0 auto;
}
</style>