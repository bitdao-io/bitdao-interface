<template>
  <section ref="container" class="bitflow">
    <div class="bitflow-inner">
      <div ref="flow1" class="flow flow1">
        <div class="bitflow-item bitflow-item-1">
          <div class="flow-icon-container">
            <img src="@/assets/image/bitflow/flow-icon1-net.svg" alt="">
          </div>
          <p class="bitflow-item__text" v-html="$t('flow[0][0]')" />
        </div>
        <div class="bitflow-item bitflow-item-2">
          <div class="flow-icon-container">
            <img src="@/assets/image/bitflow/flow-icon2-partner.svg" alt="">
          </div>
          <p class="bitflow-item__text" v-html="$t('flow[0][1]')" />
        </div>
        <div class="bitflow-item bitflow-item-3">
          <div class="flow-icon-container">
            <img src="@/assets/image/bitflow/flow-icon3-growth.svg" alt="">
          </div>
          <p class="bitflow-item__text" v-html="$t('flow[0][2]')" />
        </div>
      </div>
      <div ref="flow2" class="flow flow2">
        <div class="bitflow-item bitflow-item-1">
          <div class="flow-icon-container">
            <img src="@/assets/image/bitflow/flow-icon4-voting.svg" alt="">
          </div>
          <p class="bitflow-item__text" v-html="$t('flow[1][0]')" />
        </div>
        <div class="arrow-line arrow-line-1">
          <svg-icon icon-class="arrow-line" class="arrow-line__icon" />
        </div>

        <div class="arrow-line arrow-line-2">
          <svg-icon icon-class="arrow-line" class="arrow-line__icon" />
        </div>
        <div class="bitflow-item bitflow-item-2">
          <div class="flow-icon-container">
            <img src="@/assets/image/bitflow/flow-icon5-pool.svg" alt="">
          </div>
          <p class="bitflow-item__text" v-html="$t('flow[1][1]')" />
        </div>
        <div />
        <div class="bitflow-item bitflow-item-3">
          <div class="flow-icon-container">
            <img src="@/assets/image/bitflow/flow-icon6-governance.svg" alt="">
          </div>
          <p class="bitflow-item__text" v-html="$t('flow[1][2]')" />
        </div>
      </div>
      <div ref="flow3" class="flow flow3">
        <div class="bitflow-item bitflow-item-1">
          <div class="flow-icon-container">
            <img src="@/assets/image/bitflow/flow-icon7-protocol.svg" alt="">
          </div>
          <p class="bitflow-item__text" v-html="$t('flow[2][0]')" />
        </div>
        <div class="bitflow-item bitflow-item-2">
          <div class="flow-icon-container">
            <img src="@/assets/image/bitflow/flow-icon8-grants.svg" alt="">
          </div>
          <p class="bitflow-item__text" v-html="$t('flow[2][1]')" />
        </div>
        <div class="bitflow-item bitflow-item-3">
          <div class="flow-icon-container">
            <img src="@/assets/image/bitflow/flow-icon9-token.svg" alt="">
          </div>
          <p class="bitflow-item__text" v-html="$t('flow[2][2]')" />
        </div>
      </div>
      <div ref="dashed" class="dashed-circle" />
      <img ref="arrow1" src="@/assets/image/bitflow/arrow.svg" alt="to right" class="arrow1">
      <img ref="arrow2" src="@/assets/image/bitflow/arrow.svg" alt="to down" class="arrow2">
      <img ref="arrow3" src="@/assets/image/bitflow/arrow.svg" alt="to up" class="arrow3">
      <span class="flow-desc flow-desc1">{{ $t('flowOrder[0]') }}</span>
      <span class="flow-desc flow-desc2">{{ $t('flowOrder[1]') }}</span>
      <span class="flow-desc flow-desc3" v-html="$t('flowOrder[2]')" />
    </div>
  </section>
</template>

<script>
import { gsap, TweenMax } from 'gsap'

export default {
  mounted () {
    // eslint-disable-next-line no-unused-vars
    const { container, dashed, flow1, flow2, flow3, arrow1, arrow2, arrow3 } = this.$refs
    // gsap.to(box, { rotation: 27, x: 100, duration: 1 })
    const tl = gsap.timeline({
    // yes, we can add it to an entire timeline!
      scrollTrigger: {
        trigger: container,
        pin: true, // pin the trigger element while active
        start: 'top top', // when the top of the trigger hits the top of the viewport
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
    // 0 120 240
    tl.add(TweenMax.to(flow1, 1, { scale: 1.3, backgroundColor: '#fff', color: '#000' }), 'first')
      .add(TweenMax.to(flow1, 1.5, { }), 'first')

    tl.add(TweenMax.to(dashed, 1, { rotate: 120 }), 'second')
      .add(TweenMax.to(flow1, 1, { scale: 1, backgroundColor: '#3CA3D6', color: '#fff' }), 'second')
      .add(TweenMax.to(flow2, 1, { scale: 1.3, backgroundColor: '#fff', color: '#000' }), 'second')
      .add(TweenMax.to(flow2, 1.5, { }), 'second')

    tl.add(TweenMax.to(dashed, 1, { rotate: 240 }), 'third')
      .add(TweenMax.to(flow2, 1, { scale: 1, backgroundColor: '#3CA3D6', color: '#fff' }), 'third')
      .add(TweenMax.to(flow3, 1, { scale: 1.3, backgroundColor: '#fff', color: '#000' }), 'third')
      .add(TweenMax.to(flow3, 1.5, { }), 'third')
    // tl.add(TweenMax.to(flow3, 1, { scale: 1, backgroundColor: '#3CA3D6', color: '#fff' }), 'forth')
  }
}
</script>

<style scoped lang="scss">
.bitflow {
  background-size: cover;
  background-blend-mode: multiply;
  height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .bitflow-inner {
    position: absolute;
    width: 600px;
    height: 600px;
  }
  .dashed-circle {
    position: absolute;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    border: 5px dashed #3CA3D6;
    box-sizing: border-box;
    transform: rotate(0deg); // 0 120 240
    border-top-color: #fff;
    z-index: 10;
  }
  .bitflow-item-1 {
    width: 200px;
    top: 20px;
  }
  .bitflow-item-2 {
    width: 70px;
    left: 50px;
    top: 150px;
  }
  .bitflow-item-3 {
    width: 70px;
    right: 50px;
    top: 150px;
  }
  .arrow-line-1 {
    right: 80px;
    top: 90px;
  }
  .arrow-line-2 {
    left: 80px;
    top: 90px;
    transform: rotate(235deg);
  }
  .arrow-line {
    position: absolute;
    z-index: 999;
    .arrow-line__icon {
      color: red;
      z-index: 999;
      font-size: 2rem;
    }
  }
  .bitflow-item {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    .bitflow-item__text {
      font-size: 14px;
      text-align: center;
      font-weight: 700;
      margin-top: 10px;
      line-height: 18px;
      min-width: 100px;
    }
  }
  .flow-icon-container {
    width: 54px;
    height: 54px;
    border: 1px solid #FFFFFF;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #3CA3D6;
    img {
      width: 70px;
      height: 70px;
    }
  }
  .flow2, .flow3 {
    .flow-icon-container {
      img {
        width: 44px;
        height: 44px;
      }
    }
  }
  .flow {
    position: absolute;
    width: 320px;
    height: 320px;
    border-radius: 50%;
    background: #3CA3D6;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 20;
    color: #fff;
  }
  .flow1 {
    top: 30px;
    left: -120px;
    // transform: scale(1.4);
    // background: #fff;
  }
  .flow2 {
    top: 30px;
    right: -120px;
    // transform: scale(1.4);
    // background: #fff;
  }
  .flow3 {
    // background: #fff;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
  }
  .arrow1 {
    position: absolute;
    top: -10px;
    left: 280px;
    z-index: 11;
  }
  .arrow2 {
    position: absolute;
    bottom: 120px;
    right: 45px;
    transform: rotate(120deg); // 0 120 240
    z-index: 11;
  }
  .arrow3 {
    position: absolute;
    bottom: 120px;
    left: 45px;
    transform: rotate(-126deg); // 0 120 240
    z-index: 11;
  }
  .flow-desc {
    font-size: 20px;
    color: #3CA3D6;
    font-weight: 700;
    display: block;
  }
  .flow-desc1 {
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 12;
  }
  .flow-desc2 {
    position: absolute;
    bottom: 120px;
    right: 0;
    transform: translate(80%, 0);
    z-index: 12;
  }
  .flow-desc3 {
    position: absolute;
    bottom: 120px;
    left: 0px;
    transform: translate(-80%, 0);
    z-index: 12;
  }
}
</style>
