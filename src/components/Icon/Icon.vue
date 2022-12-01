<template>
  <svg :style="{ ...style }">
    <use :href="iconName"></use>
  </svg>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Icon',
  props: {
    name: String,
    style: Object
  },
  setup (ctx) {
    const iconName = `#${ctx.name}`
    return {
      iconName
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
