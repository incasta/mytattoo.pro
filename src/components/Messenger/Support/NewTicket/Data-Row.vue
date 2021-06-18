<template lang="pug">
    
    .Data-Row
        label.Data-Item
            span.Data-Label Имя
            input.Data-Input(type="text" placeholder="Имя" value="Алексей")

</template>

<script>
export default {
    

}
</script>

<style lang="scss" scoped>

.Data-Row {
    display: flex;
    align-items: center;
    height: 42px;
    &:not(:last-child) {
        margin-bottom: 15px;
    }
    &.disabled {
      .Data-Label {
          opacity: .5;
      }
    }

    @include respond-to(small-medium-screens) {
      &:not(:last-child) {
          margin-bottom: 10px;
      }
    }

    @include respond-to(handlers) {
      height: unset;
      &:not(:last-child) {
          margin-bottom: 15px;
      }
    }
  }

  .Data-Item {
    @include flex-a_center;
    min-width: 220px;
    width: 100%;
    cursor: pointer;
    @include respond-to(handlers) {
      flex-wrap: wrap;
      .Data-Label, .Data-Input, .Data-Singleselect {
        width: 100%;
        margin: 0;
        max-width: 100%;
      }
      .Data-Label {
        margin-bottom: 5px;
      }
      .Toggler {
        margin-left: 0;
        & ~ .Data-Input.small {
          margin-left: 0;
          margin-right: 20px;
          order: -1;
        }
        & ~ .Data-Label {
          margin-bottom: 5px;
        }
      }
    }
  }
</style>