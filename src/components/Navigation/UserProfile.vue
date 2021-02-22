<template lang="pug">
    .UserProfile
      .user-balance-wrap
        router-link(to="/").user-balance
          .user-balance--pay
            //- app-icon(name="send")
          .user-balance--current
            span.label Баланс
            span.value 1200 
            span.currency ₽
      router-link(to="/").user-avatar
        img(src='@/assets/img/users/user.jpg', alt='')
</template>


<script>

import AppIcon from '@/components/common/app-icon.vue'

export default {
  name: 'UserProfile',
  components: {
    AppIcon,
  }
}
</script>

<style lang="scss" scoped>

.UserProfile {
  // @include flex-a_center;
  display: flex;
}

.user-balance-wrap {
  background: linear-gradient(270deg,rgba(255,255,112,0) 5%,rgba(255,255,112,.56471)), var(--pallete-dark-regular);
  padding: 1px;
  border-radius: 2px;
  display: flex;
  margin-right: calc(-1.25 * var(--indent-h));

  &:hover {
    .user-balance {
      .user-balance--current {
        span.label {
          opacity: .5;
          max-height: 1rem;
        }
      }
    }
  }
}

.user-balance {
  background-color: var(--pallete-dark-regular);
  padding: 0 calc(2 * var(--indent-h)) 0 var(--indent-h);
  display: flex;
  align-items: center;
  color: var(--pallete-blue);
  font-weight: 700;
  text-decoration: none;
  position: relative;

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
    position: absolute;
    z-index: 1;
    left: 0;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
  }
}





</style>