<template lang="pug">

    .Dialogs
      router-link(to="/news")
        app-icon(name='chat')
        
</template>

<script>
export default {
  name: 'Dialogs',
}
</script>

<style lang="scss" scoped>
.Dialogs {
  background-color: var(--pallete-transparent-bg);
  border-radius: 100%;
  // margin: 0 1em;
  grid-area: msg;

  a {
    @include flex-ja_center;
    @include trans-ease-in;
    width: 3em;
    height: 3em;
    &:hover {
      filter: drop-shadow(0 0 5px var(--pallete-blue));
      &.router-link-exact-active .icon {
        filter: drop-shadow(0 0 15px var(--pallete-blue));
      }
    }

    &.router-link-exact-active {
      filter: drop-shadow(0 0 5px var(--pallete-blue));
    }
    &.router-link-exact-active .icon {
      filter: drop-shadow(0 0 15px var(--pallete-blue));
    }
  }

  @include respond-to(small-medium-screens) { 
    // margin: 0 1em 0 auto;
    margin-left: auto
  }

  .icon {
    @include trans-ease-in;
    fill: var(--pallete-blue);
    margin: 0 2px 2px 0;
  }
}


</style>