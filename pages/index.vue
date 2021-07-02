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
  },
  head: {
    title: 'BitDAO | Home'
  }
}
</script>

<style lang="scss">
.container {
  overflow-x: hidden;
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), linear-gradient(180deg, #FFFFFF 0.37%, rgba(226, 240, 255, 0.5) 3.72%, rgba(255, 243, 249, 0.8) 16.41%, #ECF8FF 21.09%), linear-gradient(179.92deg, #D9E5F3 0.07%, #FDEFF6 25.84%, #BEDDEF 42.18%, #76CFF5 57.8%, #43A3C6 64.27%, #F6EDF6 71.82%, rgba(247, 238, 246, 0.61) 82.8%, #77CFF5 88.87%, #1CADDF 104.81%);
}
</style>
