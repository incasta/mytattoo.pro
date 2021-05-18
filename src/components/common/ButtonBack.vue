<template lang="pug">
    a.Button-Back(href="javascript:void(0);" @click="show") 
      span.Button-Icon(v-if="icon !== undefined") 
        app-icon(:name="icon" :class="iconClass")
      span {{ text }}
        
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
        // default: "arrow-small-right",
      },
      iconClass: {
        type: String,
        required: false,
        default: "",
      },
  },
  methods: {
    show () {
      this.$modal.show('ModalWarning');
    },
    hide () {
      this.$modal.hide('ModalWarning');
    }
  },
  mount () {
    this.show()
  }   
}
</script>

<style lang="scss" scoped>

.Button-Back {
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
    .icon {
      fill: var(--palette-blue);
    }
  }
  &:hover {
    text-shadow: 0 0 5px var(--palette-blue);
    box-shadow: 0 5px 15px rgba(0, 0, 0, .2);
    .Button-Icon {
    //   width: 70px;
      .icon {
        animation: swipe-right .3s ease alternate-reverse;
        filter: drop-shadow(0 0 10px var(--palette-blue));
        transform: translate3d(0, 0, 0);
      }
    }
    &.outline {
      &.yellow {
        text-shadow: none;
        box-shadow: inset 0 0 10px var(--palette-yellow), 0 0 0px var(--palette-yellow);
      }
    }
    
  }

  &.outline {
    @include trans-ease-out;
    border-radius: 200px;
    border: 2px solid var(--palette-blue);
    padding: 1em 0;
    background: repeating-linear-gradient(0, transparent, transparent 2px, rgba(0, 0, 0, 0.3) 4px, rgba(0, 0, 0, 0.3) 3px), rgba(0,0,0, .1);
    &.yellow {
      border-color: var(--palette-yellow);
      color: var(--palette-yellow);
      text-shadow: 0 0 15px var(--palette-yellow);
      box-shadow: inset 0 0 0px var(--palette-yellow), 0 0 5px var(--palette-yellow);
    }
    &.pink {
      border-color: var(--palette-pink);
      color: var(--palette-pink);
    }
  }
}


</style>