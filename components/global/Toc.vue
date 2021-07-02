<template>
  <ul>
    <li v-for="item of tocs" :key="item.href">
      <a :href="`#${item.href}`" :class="[ faq ? 'faq' : '' ]">{{ item.text }}</a>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    tocs: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      faq: false
    }
  },
  mounted () {
    this.faq = this.$route.name === 'faq'
  }
}
</script>

<style scoped lang="scss">
ul {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  position: -webkit-sticky;
  position: sticky;
  align-self: flex-start;
  top: 6rem;
  min-width: 180px;
  max-width: 250px;
  max-height: 70vh;
  overflow: auto;
  font-size: 16px;
  margin: 0 2rem 0 0;
  opacity: 0.6;
  transition: opacity 0.3s ease;
  list-style: none;
  text-decoration: none;
  border-left: 1px solid #F7F8FA;

  &:hover {
    opacity: 1;
  }
  li {
    padding: 0px;
  }
}
li {
  margin-bottom: 0px;
  margin-top: 0.125rem;
  margin-bottom: 0.5em;
  a {
    text-decoration: none;
    color: #3CA3D6;
    // white-space: pre;
    text-overflow: ellipsis;
    cursor: pointer;
    position: relative;
    display: block;
    line-height: 24px;
    margin-bottom: 2px;
    &:hover {
      text-decoration: underline;
    }
  }
  .faq {
    padding-left: 20px;
    box-sizing: border-box;
    line-height: 24px;
    margin-bottom: 10px;
    position: relative;
    &::before {
      content: ' ';
      position: absolute;
      left: 0;
      top: 8px;
      width: 5px;
      height: 5px;
      background-color: #EB8A90;
    }
  }
}
</style>
