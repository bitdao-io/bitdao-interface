<template>
  <header>
    <div class="header-container">
      <a href="/" class="header__left">
        BitDAO
      </a>
      <div class="header__right">
        <a
          href="https://docs.bitdao.io/"
          data-buried="click,header_litepaper"
          rel="noopener noreferrer"
          target="_blank"
        >
          {{ $t('Litepaper') }}
        </a>
        <a
          href="https://snapshot.org/#/bitdao.eth"
          data-buried="click,header_governance"
          rel="noopener noreferrer"
          target="_blank"
        >
          {{ $t('Governance') }}
        </a>
        <a
          href="https://discourse.bitdao.io/"
          data-buried="click,header_forum"
          rel="noopener noreferrer"
          target="_blank"
        >
          {{ $t('Forum') }}
        </a>
        <a
          href="https://docs.bitdao.io/additional-documents/faq"
          data-buried="'click,header_faq"
          rel="noopener noreferrer"
          target="_blank"
        >
          {{ $t('FAQ') }}
        </a>
        <Lang />
      </div>
      <Buger class="buger" />
    </div>
  </header>
</template>
<script>
import Lang from './Lang.vue'
import Buger from './Buger.vue'
export default {
  components: {
    Lang,
    Buger
  }
}
</script>

<style scoped lang="scss">
header {
  background: #fff;
  color: #353535;
  width: 100%;
  padding: 1.5rem 2rem;
  a {
    &:hover {
      color: #3CA3D6;
    }
  }
  .header-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .header__left {
      font-size: 22px;
      font-weight: 700;
    }
    .header__right {
      display: flex;
      align-items: center;
      a {
        font-size: 14px;
        font-weight: 700;
        margin-right: 50px;
      }
    }
  }
  .buger {
    display: none;
  }
}

@media screen and (max-width: 800px){
  header {
    .header-container {
      .header__right {
        display: none;
      }
    }
    .buger {
      display: block;
    }
  }
}
</style>
