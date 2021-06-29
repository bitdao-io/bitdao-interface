<template>
  <div class="treasury">
    <Header />
    <div class="treasury-content">
      <div class="title-table">
        <h1 class="treasury-title">
          Analytics <svg-icon class="title-icon" icon-class="title-suffix" />
        </h1>
        <ContributionTable />
      </div>
      <DataDailyTrading />
    </div>
    <Footer />
    <Sidebar />
  </div>
</template>

<script>
import Header from '@/components/global/Header.vue'
import Footer from '@/components/global/Footer.vue'
import DataDailyTrading from '@/components/mdx/DataDailyTrading.vue'
import ContributionTable from '@/components/mdx/ContributionTable.vue'
export default {
  components: {
    Header,
    Footer,
    DataDailyTrading,
    ContributionTable
  }
}
</script>

<style lang="scss" scoped>
.treasury {
  min-height: 100vh;
  background: linear-gradient(180.17deg, rgba(14, 71, 239, 0) -6.29%, rgba(14, 71, 239, 0) -6.29%, rgba(14, 71, 239, 0.03) 67.94%), linear-gradient(257.75deg, #FFF5F9 2.85%, #FFF3F8 2.85%, rgba(255, 255, 255, 0) 87.69%), linear-gradient(112.11deg, #F0F9FF 5.74%, #F8FCFF 65.5%);
  .treasury-content {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 50px 0;
  }
  .title-table {
    margin-bottom: 100px;
    width: 100%;
    max-width: 1000px;
    padding: 10px;
  }
  .treasury-title {
    font-size: 48px;
    line-height: 61px;
    color: #0E47EF;
    font-weight: 700;
    align-self: flex-start;
    margin-bottom: 50px;
    .title-icon {
      font-size: 10px;
    }
  }
}
</style>
