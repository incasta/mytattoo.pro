<script>
export default {
  render(h) {
    return h(this.dynamicName, {
      class: 'icon',
      on: this.$listeners,
      attrs: {
        ...this.$attrs,
        width: this.size,
        height: this.size,
      },
    });
  },
  computed: {
    dynamicName() {
      return () => import(
        /* webpackChunkName: "icons" */
        /* webpackMode: "lazy-once" */
        `@/assets/icons/${this.name}.svg`
      );
    },
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: false,
      default: '20px',
    },
  },
}
</script>

<style lang="scss" scoped>
.icon {
  fill: #fff;
}

</style>
