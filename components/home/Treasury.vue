<template>
  <section class="treasury">
    <h1>TREASURY PROTOCOL</h1>
    <p>$ 1,000,000,000+ </p>
    <!-- <p>{{ animatedNumber }}</p> -->
    <h2>ANNUALLY *EST.</h2>
    <a
      href="/faq"
      class="bit-button"
      data-buried="'click','home','find-out-more'"
      rel="noopener noreferrer"
      target="_blank"
    >
      <span class="bit-button_text">FIND OUT MORE</span>
      <svg-icon icon-class="arrow-right" />
    </a>
  </section>
</template>

<script>
// import { gsap } from 'gsap'

// export default {
//   data () {
//     return {
//       tweenedNumber: 0
//     }
//   },
//   computed: {
//     animatedNumber () {
//       return this.tweenedNumber.toFixed(0)
//     }
//   },
//   mounted () {
//     gsap.to(this.$data, { duration: 5, tweenedNumber: 100000 })
//   }
// }
</script>

<style lang="scss" scoped>
.treasury {
  background: linear-gradient(#D9E5F3, #E4E8F4);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 600px;
  padding-top: 200px;
  h1 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  p {
    color: #0E47EF;
    font-size: 96px;
    margin-bottom: 0;
    font-weight: 700;
  }
  h2 {
    font-size: 24px;
    margin-top: 40px;
    font-weight: 700;
  }
}
</style>
