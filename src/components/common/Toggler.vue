<template lang="pug">
    
    label.Toggler-Wrap(:class="{ reverse }")
        input.Toggler.pink(type="checkbox" v-if="!checked")
        input.Toggler.pink(type="checkbox" checked v-if="checked")
        span.Data-Label {{ label }}
        Tooltip(:content="tooltipContent" v-if="tooltipContent !== null && tooltipContent !== undefined")

</template>

<script>
import Tooltip from "@/components/common/Tooltip.vue";

export default {
    components: {
        Tooltip,
    },
    props: {
        checked: {
            type: Boolean,
            required: false,
            default: false,
        },
        label: {
            type: String,
            required: true,
        },
        tooltipContent: {
            type: String,
            required: false,
        },
        reverse: {
            type: Boolean,
            required: false,
            default: false
        }

    }
    
}
</script>

<style lang="scss" scoped>

.Toggler-Wrap {
    display: inline-flex;
    align-items: center;
    color: var(--palette-pink);
    text-transform: uppercase;
    &.reverse {
        .Toggler {
            order: -1;
            margin-right: 10px;
        }
    }
    cursor: pointer;
    .Data-Label {
        font-size: 14px;
    }

    @include respond-to(handlers) {
      .Data-Label {
        font-size: 12px;
      }
    }
}

.Toggler {
  margin-left: auto;
  cursor: pointer;
  appearance: unset;
  background-color: rgba(0,0,0,.5);
  width: 38px;
  height: 22px;
  border-radius: 100px;
  border: 1px solid rgba(255, 255, 255, .2);
  position: relative;
  cursor: pointer;
  flex-shrink: 0;
  &:focus {
    outline: none;
  }
  &:after {
    @include trans-ease-out;
    content: "";
    width: 16px;
    height: 16px;
    position: absolute;
    z-index: 1;
    top: 2px;
    left: 2px;
    border-radius: 100%;
    background-color: #fff;
    box-shadow: 0 0 0 #f655a0;
    opacity: .25;
  }
  &:checked {
    background-color: rgba(97,0,45,.1);
    border-color: #fff;
    &:after {
      background-color: #fff;
      box-shadow: 0 0 15px #fff;
      opacity: 1;
      left: calc(100% - 18px);
    }
  }
  &.pink {
    &:checked {
      background-color: rgba(97,0,45,.1);
      border-color: #f655a0;
      &:after {
        background-color: #f655a0;
        box-shadow: 0 0 15px #f655a0;
        opacity: 1;
        left: calc(100% - 18px);
      }
    }   
  }
  & ~ .Data-Input {
    margin-left: 20px;
  }
  & + .Data-Label {
    order: -1;
  }
  &:not(:checked) + .Data-Label {
    opacity: .5;
  }
  &:not(:checked) ~ .Data-Input {
    pointer-events: none;
    opacity: .5;
  }
  @include respond-to(small-medium-screens) {
    & ~ .Data-Input {
      margin-left: 10px;
    }
  }
  @include respond-to (handlers) {
    margin-left: 0;
    
    & ~ .Data-Input.small {
      margin-right: auto;
    }
  }
}


</style>