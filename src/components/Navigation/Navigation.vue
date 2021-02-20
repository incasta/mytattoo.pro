<template lang="pug">
    #nav
        router-link(to="/") Мастера 
        router-link(to="/about") Новости
        router-link(to="/") Эскизы 
        router-link(to="/") Галерея 
        router-link(to="/") Статьи 
        router-link(to="/") Стили
        router-link(to="/") Значения

        UserProfile

</template>

<script>
import UserProfile from '@/components/Navigation/UserProfile.vue'

export default {
  name: 'Navigation',
  components: {
      UserProfile,
  }
}
</script>

<style lang="scss" scoped>

div {
    padding: 1em;
    background-color: black;
}

#nav {
    display: flex;
    align-items: center;
    a {
        color: white;
        &.router-link-exact-active {
            color: red;
        }
    }
    
}


</style>