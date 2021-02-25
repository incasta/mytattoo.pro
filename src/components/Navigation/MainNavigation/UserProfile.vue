<template lang="pug">
    .UserProfile
      .user-balance-wrap
        router-link(to="/").user-balance
          .user-balance--pay.hidden
            app-icon(name="plus-small" size='18')
          .user-balance--current
            span.label Баланс
            span.value 1200 
            span.currency ₽
      .user-avatar-wrap.dropDown(@click='show = !show' :class='{ show }' ref='dropdown')
        .user-avatar
          .angle-small-down
            app-icon(name='angle-small-down' size='13')
          img(src='@/assets/img/users/user.jpg', alt='')
        .UserProfile-links
          router-link(to='/')
            app-icon(name='user' size='16')
          router-link(to='/')
            app-icon(name='bookmark-fill' size='14')
          router-link(to='/meanings')
            app-icon(name='sign-out' size='16')        
</template>

<script>
export default {
  name: 'UserProfile',
  data () {
    return {
      show: false
    }
  },

  methods: {
    dropDown () {
      document.addEventListener('click', (e) => {
        if (!this.$refs.dropdown.contains(e.target)) {
          this.show = false;
        }
      })
    }
  },

  mounted ()  {
    document.addEventListener('click', this.dropDown);
  },

  beforeDestroy () {
    document.removeEventListener('click', this.dropDown);
  }
}
</script>

<style lang="scss" scoped>

.UserProfile {
  display: flex;
  justify-content: flex-end;
  grid-area: user;
}

.user-balance-wrap {
  background: linear-gradient(270deg,rgba(255,255,112,0) 5%,rgba(255,255,112,.56471)), var(--pallete-dark-regular);
  padding: 1px;
  border-radius: 2px;
  display: flex;
  margin-right: calc(-1.25 * var(--indent-h));

  &:hover {
    .user-balance--current {
      span.label {
        opacity: .5;
        max-height: 1rem;
      }
    }
  }  

}

.user-balance {
  background-color: var(--pallete-dark-regular);
  padding: 0 2.5em 0 1em;
  display: flex;
  align-items: center;
  color: var(--pallete-blue);
  font-weight: 700;
  text-decoration: none;
  position: relative;

  @include respond-to(handlers) {
    padding: 0 2.5em 0 .75em;
  }

  .user-balance--current {
    span.label {
      @include trans-ease-out;
      display: block;
      color: #fff;
      font-size: 65%;
      text-transform: uppercase;
      opacity: 0;
      max-height: 0;
    }
  }

  .user-balance--pay {
    @include flex-ja_center;
    @include trans-ease-in;
    border-radius: 100%;
    width: 20px;
    height: 20px;
    position: absolute;
    z-index: 1;
    left: 0;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    background-color: var(--pallete-yellow);

    &:hover {
      background-color: var(--pallete-pink);
      
      .icon {
        transform: rotate(90deg);
      }
    }

    .icon {
      fill: var(--pallete-dark-regular);
      @include trans-ease-in;
    }
    
  }
}

.user-avatar-wrap {
  position: relative;
}

$translateY: 0%;

@for $i from 1 through 3 {
  .UserProfile-links a:nth-child(#{$i}) {
    transform: translate3d(0, $translateY + $i * -110, 0);
    opacity: 0;
  }
}

.UserProfile-links {
  @include trans-ease-in;
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 0;
  left: 50%;
  transform: translate3d(-50%, 10px, 0);
  max-height: 0px;
  a {
    @include flex-ja_center;
    @include trans-ease-in;
    margin-bottom: 5px;
    width: 42px;
    height: 42px;
    border-radius: 100%;
    background-color: var(--pallete-dark-regular);
    overflow: hidden;
    &:hover {
      .icon {
        filter: drop-shadow(0 0 5px var(--pallete-pink));
      }
    }
    &:focus {
      .icon {
        animation: swipe-right .3s ease;
      }
    }

    .icon {
      fill: var(--pallete-pink);
      @include trans-ease-out;
    }

    &.router-link-exact-active .icon {
      filter: drop-shadow(0 0 15px var(--pallete-pink));
    }
  }
}

.user-avatar-wrap {
  @include trans-ease-in;
  cursor: pointer;
  &:hover {
    img {
      opacity: .8;
    }
    
  }
  &.show {
    .UserProfile-links {
      max-height: 100vh;
      a {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
    .angle-small-down .icon {
      transform: rotate(180deg)
    }
  }
}

.angle-small-down {
  content: '';
  @include flex-ja_center;
  position: absolute;
  z-index: 2;
  right: -3px;
  bottom: -3px;
  width: 18px;
  height: 18px;
  border-radius: 100%;
  background-color: var(--pallete-dark-regular);
  .icon {
    @include trans-ease-out;
    fill: var(--pallete-blue);
  }
}

.user-avatar {
  @include respond-to(medium-screens) {
    user-select: none;
    pointer-events: none;
    img {
      width: 44px;
      height: 44px;
    }
  }
}

</style>