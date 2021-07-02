<template>
  <div class="bg-container">
    <Header />
    <div class="docs-container">
      <h1 class="docs-title">
        {{ title }} <svg-icon class="icon" icon-class="title-suffix" />
      </h1>
      <div class="sidebar-body">
        <Toc :tocs="toc" />
        <div class="docs-body">
          <Nuxt />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/global/Header.vue'
import Footer from '@/components/global/Footer.vue'
import Toc from '@/components/global/Toc.vue'

export default {
  components: {
    Header,
    Footer,
    Toc
  },
  computed: {
    title () {
      return this.$store.state.docs.title
    },
    toc () {
      return this.$store.state.docs.toc
    }
  }
}
</script>

<style lang="scss">
.bg-container {
  background: linear-gradient(180.17deg, rgba(14, 71, 239, 0) -6.29%, rgba(14, 71, 239, 0) -6.29%, rgba(14, 71, 239, 0.03) 67.94%), linear-gradient(257.75deg, #FFF5F9 2.85%, #FFF3F8 2.85%, rgba(255, 255, 255, 0) 87.69%), linear-gradient(112.11deg, #F0F9FF 5.74%, #F8FCFF 65.5%);
}
.docs-container {
  padding: 4rem 5rem;
  box-sizing: border-box;
  position: relative;
  max-width: 1450px;
  margin: auto;
  h1.docs-title {
    font-size: 48px;
    color: #3CA3D6;
    font-weight: 700;
    margin-bottom: 4rem;
    .icon {
      font-size: 14px;
    }
  }
  .sidebar-body {
    display: flex;
    .toc-sidebar {
      padding: 1.75rem;
      flex: 1;
    }
    .docs-body {
      flex: 4;
    }
  }
}
.docs-body {
  margin-left: 100px;
}
.toc-sidebar{}
</style>
