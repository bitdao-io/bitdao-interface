<template>
  <section ref="container" class="growth-container">
    <div class="growth">
      <div class="growth-left">
        <div ref="selector" class="select-bg" />
        <h1 class="title">
          <span>Growing the</span> BitDAO Ecosystem
        </h1>
        <div ref="growth1" class="growth-left_item">
          <img src="@/assets/image/growth/support-bg.svg" alt="support" class="growth-left_icon">
          <div class="growth-left_text">
            <h1>Bybit Support</h1>
            <p>Bybit is the first partner of BitDAO, contributing 2.5bps of futures trading volume to BitDAO’s treasury.</p>
          </div>
        </div>
        <div ref="growth2" class="growth-left_item">
          <img src="@/assets/image/growth/partner-bg.svg" alt="support" class="growth-left_icon">
          <div class="growth-left_text">
            <h1>Partnerships</h1>
            <p>Token swap with DeFi protocols and CeFi projects and expand the BitDAO ecosystem. Accumulate a collection of the best DeFi assets.</p>
          </div>
        </div>
        <div ref="growth3" class="growth-left_item">
          <img src="@/assets/image/growth/doc-bg.svg" alt="support" class="growth-left_icon">
          <div class="growth-left_text">
            <h1>Building Protocols</h1>
            <p>Launch innovative products on the BitDAO protocol. Integrate with the industry’s leading protocols.</p>
          </div>
        </div>
      </div>
      <div ref="rocket" class="rocket">
        <img src="@/assets/image/growth/rocket.svg" alt="to da moon!">
      </div>
    </div>
    <div class="cloud">
      <img src="@/assets/image/growth/cloud.svg" alt="cloud">
    </div>
  </section>
</template>

<script>
import { gsap, TweenMax } from 'gsap'

export default {
  mounted () {
    const { container, selector, growth1, growth2, growth3, rocket } = this.$refs
    // gsap.to(box, { rotation: 27, x: 100, duration: 1 })
    const tl = gsap.timeline({
    // yes, we can add it to an entire timeline!
      scrollTrigger: {
        trigger: container,
        pin: true, // pin the trigger element while active
        start: 'top 50px', // when the top of the trigger hits the top of the viewport
        // end: '+=500', // end after scrolling 500px beyond the start
        scrub: 1 // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        // snap: {
        //   snapTo: 'labels', // snap to the closest label in the timeline
        //   duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
        //   delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
        //   ease: 'power1.inOut' // the ease of the snap animation ("power3" by default)
        // }
      }
    })
    tl.add(TweenMax.from(selector, 1, { y: 50, opacity: 0 }), 'first')
      .add(TweenMax.to(growth1, 1, { opacity: 1 }), 'first')
      .add(TweenMax.to(growth1, 1.5, { opacity: 1 }), 'first')
      .add(TweenMax.to(rocket, 1, { y: 300 }), 'first')

      .add(TweenMax.to(selector, 1, { y: 310 }), 'second')
      .add(TweenMax.to(growth1, 1, { opacity: 0.5 }), 'second')
      .add(TweenMax.to(growth2, 1, { opacity: 1 }), 'second')
      .add(TweenMax.to(growth2, 1.5, { opacity: 1 }), 'second')
      .add(TweenMax.to(rocket, 1, { y: 100 }), 'second')

      .add(TweenMax.to(selector, 1, { y: 530 }), 'third')
      .add(TweenMax.to(growth2, 1, { opacity: 0.5 }), 'third')
      .add(TweenMax.to(growth3, 1, { opacity: 1 }), 'third')
      .add(TweenMax.to(growth3, 1.5, { opacity: 1 }), 'third')
      .add(TweenMax.to(rocket, 1, { y: -100 }), 'third')

      .add(TweenMax.to(selector, 1, { y: 650, opacity: 0 }), 'forth')
      .add(TweenMax.to(growth3, 1, { opacity: 0.5 }), 'forth')
      .add(TweenMax.to(rocket, 1, { y: -500 }), 'forth')
  }
}
</script>

<style scoped lang="scss">
.icon {
  font-size: 8rem;
}
.growth-container {
  position: relative;
  background-size: cover;
  background-blend-mode: multiply;
  background-position: center;
  height: 1200px;
}
.growth {
  position: relative;
  z-index: 99;
  background: url('@/assets/image/transparent/bg.svg') center center no-repeat;
  max-width: 1450px;
  height: 700px;
  margin: auto;
  .growth-left {
    z-index: 100;
    position: absolute;
    left: 100px;
    .select-bg {
      position: absolute;
      transform: translate(0, 100px); // 150, 360, 580
      background: linear-gradient(81.64deg, #FFF0F1 -20.74%, #FFFFFF 90.58%);
      box-shadow: 14px 13px 26px rgba(253, 233, 233, 0.24);
      border-radius: 28px;
      width: 687px;
      height: 204px;
      z-index: 90;
    }
    .title {
      z-index: 100;
      font-size: 42px;
      font-weight: 700;
      color: #0E47EF;
      margin-bottom: 100px;
      position: relative;
      span  {
        color: #000;
      }
    }
    .growth-left_item {
      width: 687px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 50px;
      flex-direction: row;
      margin-bottom: 80px;
      opacity: 0.5;
      position: relative;
      z-index: 100;
    }
    .growth-left_icon {
      align-self: flex-start;
      margin-right: 30px;
      width: 60px;
    }
    .growth-left_text {
      h1 {
        font-size: 24px;
        line-height: 29px;
        font-weight: 700;
        margin-bottom: 20px;
      }
      p {
        font-size: 18px;
        line-height: 35px;
      }
    }
  }
}
.cloud {
  position: absolute;
  height: 900px;
  width: 100%;
  left: 0;
  right: 0;
  bottom: -100px;
  background-size: cover;
  background-blend-mode: multiply;
  z-index: 1;
  overflow: hidden;
  img {
    width: 100%;
  }
}
.rocket {
  z-index: 100;
  position: absolute;
  transform: translate(1100px, 500px);
  img {
    z-index: 100;
  }
}
</style>
