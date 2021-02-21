<template lang='pug'>

  #app
    Navigation
    router-view

</template>

<script>
import Navigation from '@/components/Navigation/Navigation.vue'

export default {
  components: {
    Navigation,
  }
}
</script>

<style lang="scss">
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: Jura, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  letter-spacing: .1ex;
}

body, html { 
  background-color: var(--pallete-black-bg);
  min-height: 300vh;
}

.container {
  max-width: 1280px;
  width: 100%;
  padding: 0 40px;
  margin: 0 auto;
}

a {
  @include trans-ease-in;
}

.user-avatar {
  width: 50px;
  height: 50px;
  border-radius: 100%;
  overflow: hidden;
  position: relative;
}
</style>
