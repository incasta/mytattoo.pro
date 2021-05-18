<template lang="pug">
  
  main
    CurrentLocation
  
</template>

<script>
// @ is an alias to /src
import CurrentLocation from '@/components/common/CurrentLocation.vue';

export default {
  name: 'Home',
  components: {
    CurrentLocation,
  }
}
</script>

<style lang="scss" scoped>
img {
  margin: 0 auto;
}
</style>