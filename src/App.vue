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
  },
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
  
  @include respond-to(large-screens) {
    font-size: 13px;
  }
}

body, html { 
  background-color: var(--pallete-black-bg);
  min-height: 300vh;
}

.hidden {
  display: none !important;
}

.container {
  max-width: 1280px;
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  @include respond-to(large-screens) {
    max-width: 980px;
  }

  @include respond-to(small-medium-screens) {
    padding: 0 10px;
  }
}

a {
  @include trans-ease-in;
}

img {
  @include trans-ease-in;
}

// user avatar 
.user-avatar {
  position: relative;
  z-index: 1;
  display: block;
  img {
    width: 54px;
    height: 54px;
    border-radius: 100%;
    overflow: hidden;
    display: block;
  }
  
}

// 


</style>
