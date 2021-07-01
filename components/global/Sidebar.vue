<template>
  <div class="sidebar">
    <div v-if="isPanelOpen" class="sidebar-backdrop" @click="closeSidebarPanel" />
    <transition name="slide">
      <div
        v-if="isPanelOpen"
        class="sidebar-panel"
      >
        <div class="sidebar-panel-nav">
          <a
            href="https://docs.bitdao.io/"
            data-buried="click,header_litepaper"
            rel="noopener noreferrer"
          >
            {{ $t('Litepaper') }}
          </a>
          <a
            href="https://snapshot.org/#/bitdao.eth"
            data-buried="click,header_governance"
            rel="noopener noreferrer"
          >
            {{ $t('Governance') }}
          </a>
          <a
            href="https://discourse-test.bitdao.io/"
            data-buried="click,header_forum"
            rel="noopener noreferrer"
          >
            {{ $t('Forum') }}
          </a>
          <a
            href="https://docs.bitdao.io/additional-documents/faq"
            data-buried="'click,header_faq"
            rel="noopener noreferrer"
          >
            {{ $t('FAQ') }}
          </a>
          <Lang class="lang-c" />
        </div>
        <slot />
      </div>
    </transition>
  </div>
</template>

<script>
import Lang from './Lang.vue'
export default {
  component: {
    Lang
  },
  computed: {
    isPanelOpen () {
      return this.$store.state.isNavOpen
    }
  },
  methods: {
    closeSidebarPanel () {
      this.$store.commit('toggleNav')
    }
  }
}
</script>

<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active
{
  transition: transform 0.2s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
  transition: all 150ms ease-in 0s
}

.sidebar-backdrop {
  background-color: rgba(0, 0, 0, .5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  cursor: pointer;
}

.sidebar-panel {
  overflow-y: auto;
  background: linear-gradient(180deg, #ECF8FF 0%, #ffffff 100%);
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  z-index: 999;
  padding: 20px 0;
  width: 250px;
}
.sidebar-panel-nav {
  text-decoration: none;
  display: block;
  padding-bottom: 0.5em;
  a, .lang-c {
    display: block;
    padding: 10px 20px;
    margin: 20px 0;
    font-weight: 700;
  }
}
</style>
