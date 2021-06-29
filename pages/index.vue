<template>
  <div class="container">
    <Header />
    <HomeLogo />
    <TreasuryChart />
    <FlowChart />
    <Partner />
    <Footer />
    <Sidebar />
  </div>
</template>

<script>
import Header from '@/components/global/Header.vue'
import Footer from '@/components/global/Footer.vue'
import HomeLogo from '@/components/HomeLogo.vue'
import TreasuryChart from '@/components/TreasuryChart.vue'
import FlowChart from '@/components/FlowChart.vue'
import Partner from '@/components/home/Partner.vue'

export default {
  components: {
    Header,
    Footer,
    Partner,
    HomeLogo,
    TreasuryChart,
    FlowChart
  }
}
</script>

<style lang="scss">
.container {
  overflow-x: hidden;
}
</style>
