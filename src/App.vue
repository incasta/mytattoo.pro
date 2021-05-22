<template lang='pug'>

  #app
    Navigation
    router-view
    Footer

</template>

<script>
import Navigation from '@/components/Navigation/Navigation.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Navigation,
    Footer
  },
}
</script>

<style lang="scss">


// .vm--modal {
//   &.Modal--Gallery {
//     background-color: transparent !important;
//     box-shadow: none !important;
//   }
// }


.vm--overlay {
  background-color: rgba(9,16,22, .85) !important;
  cursor: pointer !important;
}



#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: Jura, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  letter-spacing: .1ex;
  min-height: 100vh;
  @include respond-to(large-screens) {
    font-size: 13px;
  }
}

body, html { 
  background-color: var(--palette-black-bg);
  // min-height: 300vh;
  scroll-behavior: smooth;
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

// Tippy theme

.tippy-tooltip.custom-theme {
  background-color: var(--palette-dark-purple);
  font-family: Jura, sans-serif;

  &[data-animatefill] {
    background-color: transparent;
  }

  .tippy-backdrop {
    background-color: var(--palette-dark-purple);
  }
  // arrow
  &[x-placement^='top'] .tippy-arrow,
  &[x-placement^='bottom'] .tippy-arrow,
  &[x-placement^='left'] .tippy-arrow,
  &,[x-placement^='right'] .tippy-arrow {
    background-color: var(--palette-dark-purple);
  }
  .tippy-roundarrow {
    fill: var(--palette-dark-purple);
  }

  .tippy-content {
    padding: 10px;
    a {
      color: var(--palette-blue);
    }
    
  }
} 

* {
  &.disabled {
    user-select: none;
    pointer-events: none;
    cursor: not-allowed;
    opacity: .5;
  }
}



</style>
