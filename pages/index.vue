<template>
  <div class="container">
    <Header />
    <Video />
    <div class="section-container">
      <Treasury />
      <div class="treasury-section">
        <Transparent />
      </div>
      <div class="vision-section">
        <Vision />
      </div>
      <div class="counts-section">
        <BitCounts />
      </div>
      <div class="forum-section">
        <Forum />
      </div>
      <div class="growth-section">
        <Growth />
      </div>
      <div class="flow-section">
        <BitFlow />
      </div>
      <div class="partner-section">
        <Partner />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/global/Header.vue'
import Footer from '@/components/global/Footer.vue'
import Video from '@/components/home/Video.vue'
import Treasury from '@/components/home/Treasury.vue'
import Transparent from '@/components/home/Transparent.vue'
import Vision from '@/components/home/Vision.vue'
import BitCounts from '@/components/home/Bitcounts.vue'
import Forum from '@/components/home/Forum.vue'
import Growth from '@/components/home/Growth.vue'
import BitFlow from '@/components/home/Bitflow.vue'
import Partner from '@/components/home/Partner.vue'
// import Blank from '@/components/home/Blank.vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
if (process.client) { gsap.registerPlugin(ScrollTrigger) }

export default {
  components: {
    Header,
    Footer,
    Video,
    Treasury,
    Transparent,
    Vision,
    BitCounts,
    Forum,
    Growth,
    BitFlow,
    Partner
    // Blank
  }
}
</script>

<style lang="scss" scoped>
.treasury-section {
  background: linear-gradient(180deg, #E4E8F4 0%, #EAEAF5 100%);
  padding: 200px 0;
}
.vision-section {
  background: linear-gradient(#EAEAF5,#FDEFF6);
  padding-bottom: 200px;
}
.counts-section {
  background: linear-gradient(180deg, #FDEFF6 80%, #BEDDEF);
  padding: 200px 0;
}
.forum-section {
  background: linear-gradient(180deg,#BEDDEF, #76CFF5);
  padding: 100px 0;
}
.growth-section {
  background: linear-gradient(180deg, #76CFF5 0%, #43A3C6 100%);
  padding: 100px 0;
}
.flow-section {
  background: linear-gradient(180deg,#43A3C6, #F6EDF6 10%, #F6EDF6 50%, #F6EDF6 90%, #77CFF5);
  padding: 200px 0;
}
.partner-section {
  background: linear-gradient(180deg, #77CFF5 0%, #1CADDF 100%);
  padding: 200px 0;
}
</style>
<style lang="scss">
.container {
  overflow-x: hidden;
}
.section-container {
  // background: linear-gradient(179.92deg, #D9E5F3 0.07%, #FDEFF6 25.84%, #BEDDEF 42.18%, #76CFF5 57.8%, #43A3C6 64.27%, #F6EDF6 71.82%, rgba(247, 238, 246, 0.61) 82.8%, #77CFF5 88.87%, #1CADDF 104.81%);
  // background-color: #76CFF5;
}

// .title {
//   font-family:
//     'Quicksand',
//     'Source Sans Pro',
//     -apple-system,
//     BlinkMacSystemFont,
//     'Segoe UI',
//     Roboto,
//     'Helvetica Neue',
//     Arial,
//     sans-serif;
//   display: block;
//   font-weight: 300;
//   font-size: 100px;
//   color: #35495e;
//   letter-spacing: 1px;
// }

.bit-button {
  display: block;
  text-align: center;
  margin-top: 40px;
  padding: 20px;
  width: 234px;
  color: #0E47EF;
  background: #FFFFFF;
  box-shadow: 0px 4px 34px rgba(0, 0, 0, 0.25);
  border-radius: 24px;
  font-weight: 700;
  .bit-button_text {
    margin-right: 10px;
  }
}
</style>
