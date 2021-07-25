<template lang="pug">
  
  main
    CurrentLocation
    SectionChart#chart
    SectionSketches
    SectionAds
    SectionGallery

  
</template>

<script>
// @ is an alias to /src
import CurrentLocation from '@/components/common/CurrentLocationHome.vue';
import SectionChart from '@/components/Home/SectionChart.vue';
import SectionSketches from '@/components/Home/SectionSketches.vue';
import SectionAds from '@/components/Home/SectionAds.vue';
import SectionGallery from '@/components/Home/SectionGallery.vue';

export default {
  name: 'Home',
  components: {
    CurrentLocation,
    SectionChart,
    SectionAds,
    SectionSketches,
    SectionGallery,
  }
}
</script>

<style lang="scss" scoped>
img {
  margin: 0 auto;
}



</style>