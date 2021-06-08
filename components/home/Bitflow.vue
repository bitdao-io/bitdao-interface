<template>
  <section ref="container" class="bitflow">
    <div class="bitflow-inner">
      <div ref="flow1" class="flow flow1">
        <div class="bitflow-item bitflow-item-1">
          <div class="flow-icon-container">
            <img src="@/assets/image/bitflow/flow-icon1-net.svg" alt="">
          </div>
          <p class="bitflow-item__text">
            BitDAO Protocol Contributions<br> (eg. future DEX)
          </p>
        </div>
        <div class="bitflow-item bitflow-item-2">
          <div class="flow-icon-container">
            <img src="@/assets/image/bitflow/flow-icon2-partner.svg" alt="">
          </div>
          <p class="bitflow-item__text">
            Partner<br> Contributions
          </p>
        </div>
        <div class="bitflow-item bitflow-item-3">
          <div class="flow-icon-container">
            <img src="@/assets/image/bitflow/flow-icon3-growth.svg" alt="">
          </div>
          <p class="bitflow-item__text">
            Partner Token<br> Growth
          </p>
        </div>
      </div>
      <div ref="flow2" class="flow flow2">
        <div class="bitflow-item bitflow-item-1">
          <div class="flow-icon-container">
            <img src="@/assets/image/bitflow/flow-icon4-voting.svg" alt="">
          </div>
          <p class="bitflow-item__text">
            Voting
          </p>
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
          <p class="bitflow-item__text">
            On-chain<br> Capital Pool
          </p>
        </div>
        <div />
        <div class="bitflow-item bitflow-item-3">
          <div class="flow-icon-container">
            <img src="@/assets/image/bitflow/flow-icon6-governance.svg" alt="">
          </div>
          <p class="bitflow-item__text">
            BitDAO<br> Governance
          </p>
        </div>
      </div>
      <div ref="flow3" class="flow flow3">
        <div class="bitflow-item bitflow-item-1">
          <div class="flow-icon-container">
            <img src="@/assets/image/bitflow/flow-icon7-protocol.svg" alt="">
          </div>
          <p class="bitflow-item__text">
            Protocol<br> Upgrades
          </p>
        </div>
        <div class="bitflow-item bitflow-item-2">
          <div class="flow-icon-container">
            <img src="@/assets/image/bitflow/flow-icon8-grants.svg" alt="">
          </div>
          <p class="bitflow-item__text">
            Grants
          </p>
        </div>
        <div class="bitflow-item bitflow-item-3">
          <div class="flow-icon-container">
            <img src="@/assets/image/bitflow/flow-icon9-token.svg" alt="">
          </div>
          <p class="bitflow-item__text">
            Token
          </p>
        </div>
      </div>
      <div ref="dashed" class="dashed-circle" />
      <img ref="arrow1" src="@/assets/image/bitflow/arrow.svg" alt="to right" class="arrow1">
      <img ref="arrow2" src="@/assets/image/bitflow/arrow.svg" alt="to down" class="arrow2">
      <img ref="arrow3" src="@/assets/image/bitflow/arrow.svg" alt="to up" class="arrow3">
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
    tl.add(TweenMax.to(flow1, 1, { scale: 1.4, backgroundColor: '#fff', color: '#000' }), 'first')
      .add(TweenMax.to(flow1, 1.5, { }), 'first')

    tl.add(TweenMax.to(dashed, 1, { rotate: 120 }), 'second')
      .add(TweenMax.to(flow1, 1, { scale: 1, backgroundColor: '#0E47EF', color: '#fff' }), 'second')
      .add(TweenMax.to(flow2, 1, { scale: 1.4, backgroundColor: '#fff', color: '#000' }), 'second')
      .add(TweenMax.to(flow2, 1.5, { }), 'second')

    tl.add(TweenMax.to(dashed, 1, { rotate: 240 }), 'third')
      .add(TweenMax.to(flow2, 1, { scale: 1, backgroundColor: '#0E47EF', color: '#fff' }), 'third')
      .add(TweenMax.to(flow3, 1, { scale: 1.4, backgroundColor: '#fff', color: '#000' }), 'third')
      .add(TweenMax.to(flow3, 1.5, { }), 'third')
    // tl.add(TweenMax.to(flow3, 1, { scale: 1, backgroundColor: '#0E47EF', color: '#fff' }), 'forth')
  }
}
</script>

<style scoped lang="scss">
.bitflow {
  background-size: cover;
  background-blend-mode: multiply;
  height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .bitflow-inner {
    position: absolute;
    width: 508px;
    height: 508px;
  }
  .dashed-circle {
    position: absolute;
    width: 508px;
    height: 508px;
    border-radius: 50%;
    border: 5px dashed #0E47EF;
    box-sizing: border-box;
    transform: rotate(0deg); // 0 120 240
    border-top-color: #fff;
    z-index: 10;
  }
  .bitflow-item-1 {
    top: 20px;
  }
  .bitflow-item-2 {
    left: 50px;
    bottom: 40px;
  }
  .bitflow-item-3 {
    right: 50px;
    bottom: 40px;
  }
  .arrow-line-1 {
    right: 70px;
    top: 80px;
  }
  .arrow-line-2 {
    left: 120px;
    bottom: 80px;
    transform: rotate(120deg);
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
      font-size: 12px;
      text-align: center;
      font-weight: 700;
      margin-top: 10px;
      line-height: 18px;
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
    background-color: #0E47EF;
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
    width: 270px;
    height: 270px;
    border-radius: 50%;
    background: #0E47EF;
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
    left: 50%;
    z-index: 11;
  }
  .arrow2 {
    position: absolute;
    bottom: 100px;
    right: 38px;
    transform: rotate(120deg); // 0 120 240
    z-index: 11;
  }
  .arrow3 {
    position: absolute;
    bottom: 100px;
    left: 38px;
    transform: rotate(-126deg); // 0 120 240
    z-index: 11;
  }
}
</style>
