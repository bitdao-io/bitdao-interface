<template>
  <!-- https://github.com/PanJiaChen/vue-element-admin/blob/master/src/components/SvgIcon/index.vue -->
  <!-- eslint-disable-next-line vue/valid-template-root -->
  <div
    v-if="isExternal"
    :style="styleExternalIcon"
    class="svg-external-icon svg-icon"
    v-on="$listeners"
  />
  <!-- eslint-disable-next-line vue/valid-template-root -->
  <svg
    v-else
    :class="svgClass"
    aria-hidden="true"
    :style="styleSvg"
    v-on="$listeners"
  >
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
// doc: https://panjiachen.github.io/vue-element-admin-site/feature/component/svg-icon.html#usage
const isExternal = (path) => {
  return /^(https?:|mailto:|tel:)/.test(path)
}

export default {
  name: 'SvgIcon',
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      // 因为不知道为什么渲染会丢掉 svg-icon 类名 如果有覆盖属性没有则使用
      styleSvg: {
        width: '1em',
        height: '1em',
        verticalAlign: '-0.15em',
        fill: 'currentColor',
        overflow: 'hidden'
      }
    }
  },
  computed: {
    isExternal () {
      return isExternal(this.iconClass)
    },
    iconName () {
      return `#icon-${this.iconClass}`
    },
    svgClass () {
      if (this.className) {
        return 'svg-icon ' + this.className
      } else {
        return 'svg-icon'
      }
    },
    styleExternalIcon () {
      return {
        ...this.styleSvg,
        mask: `url(${this.iconClass}) no-repeat 50% 50%`,
        '-webkit-mask': `url(${this.iconClass}) no-repeat 50% 50%`
      }
    }
  }
}
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>
