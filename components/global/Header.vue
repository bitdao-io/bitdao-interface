<template>
  <header>
    <div class="header-container">
      <a href="/" class="header__left">
        BitDAO
      </a>
      <div class="header__right">
        <a
          href="/docs/litepaper"
          data-buried="'click','header','litepaper'"
          rel="noopener noreferrer"
        >
          {{ $t('Litepaper') }}
        </a>
        <a
          href="/docs/governance"
          data-buried="'click','header','governance'"
          rel="noopener noreferrer"
        >
          {{ $t('Governance') }}
        </a>
        <a
          href="https://discourse-test.bitdao.io/"
          data-buried="'click','header','forum'"
          rel="noopener noreferrer"
        >
          {{ $t('Forum') }}
        </a>
        <a
          href="/faq"
          data-buried="'click','header','faq'"
          rel="noopener noreferrer"
        >
          {{ $t('FAQ') }}
        </a>
        <Lang />
      </div>
    </div>
  </header>
</template>
<script>
import Lang from './Lang.vue'
export default {
  components: {
    Lang
  }
}
</script>

<style scoped lang="scss">
header {
  background: #fff;
  color: #353535;
  width: 100%;
  height: 52px;
  a {
    &:hover {
      color: #0E47EF;
    }
  }
  .header-container {
    width: 100%;
    height: 100%;
    padding: 0 30px;
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
}
</style>
