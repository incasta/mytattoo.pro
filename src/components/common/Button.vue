<template lang="pug">
    a.Button-Default(href="javascript:void(0);") 
        span {{ text }}
        span.Button-Icon 
            app-icon(:name="icon" :class="extraClass")
</template>

<script>
export default {
    
    name: 'Button',
    props: {
        text: {
          type: String,
          required: true,
        },
        icon: {
          type: String,
          required: false,
          default: "arrow-small-right",
        },
        extraClass: {
          type: String,
          required: false,
          default: "",
        },
    },
}
</script>

<style lang="scss" scoped>

.Button-Default {
  @include flex-a_center;
  @include trans-ease-out;
  text-decoration: none;
  text-transform: uppercase;
  color: var(--palette-blue);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: .1ex;
  text-shadow: 0 0 0px var(--palette-blue);
  background-color: var(--palette-dark-light);
  > span {
    &:not(.Button-Icon) {
      padding: 0px 30px;
      @include trans-ease-out;
      
    }
  }
  .Button-Icon {
    @include flex-ja_center;
    @include trans-ease-out;
    overflow: hidden;
    width: 60px;
    height: 60px;
    background-color: var(--palette-dark-lighter);
    .token {
      margin-left: 0;
      @include trans-ease-out;
      fill: var(--palette-blue);
    }
  }
  &:hover {
    text-shadow: 0 0 5px var(--palette-blue);
    box-shadow: 0 5px 15px rgba(0, 0, 0, .2) ;
    .Button-Icon {
    //   width: 70px;
      .icon {
        animation: swipe-v .3s ease alternate;
        filter: drop-shadow(0 0 10px var(--palette-blue));
        transform: translate3d(0, 0, 0);
      }
    }
  }
}


</style>