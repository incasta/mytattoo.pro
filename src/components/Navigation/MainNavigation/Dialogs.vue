<template lang="pug">

    //- .Dialogs.new-msg-msg.new-msg-request.new-msg-ts
    .Dialogs.new-msg-msg
      router-link(to="/news")
        app-icon(name='chat')
        span.type-msg
          span
          span
          span
        span.msg-counter 4
        
</template>

<script>
export default {
  name: 'Dialogs',
}
</script>

<style lang="scss" scoped>
.Dialogs {
  // background-color: var(--pallete-transparent-bg);
  background-color: var(--pallete-dark-regular);
  border-radius: 100px;
  grid-area: msg;

  .type-msg {
    display: inline-flex;
    vertical-align: middle;
    flex-direction: column;
    
    span {
      display: none;
      width: .2em;
      height: .2em;
      border-radius: 100%;
      margin: .1em .5em;
      
      @include respond-to(handlers) {
        width: 2px;
        height: 2px;
        margin: .1em .4em;
      }
    }
  }

  &.new-msg-request {
    .type-msg span:nth-child(1) {
      display: block;
      background-color: var(--pallete-yellow);
    }
  }

  &.new-msg-msg {
    .type-msg span:nth-child(2) {
      display: block;
      background-color: var(--pallete-blue);
    }
  }

  &.new-msg-ts {
    .type-msg span:nth-child(3) {
      display: block;
      background-color: var(--pallete-pink);
    }
  }

  a {
    @include flex-ja_center;
    @include trans-ease-in;
    // width: 3em;
    // height: 3em;
    text-decoration: none;
    padding: .75em .85em;
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

  .msg-counter {
    color: var(--pallete-blue);
    text-shadow: 0 0 5px var(--pallete-blue);
    font-weight: 700;
    line-height: 0;
  }
}


</style>