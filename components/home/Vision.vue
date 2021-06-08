<template>
  <section ref="container" class="vision-container">
    <div ref="visionInner" class="vision-inner">
      <div ref="vision" class="vision">
        <h1>Vision</h1>
        <p>BitDAO’s vision is open finance and a decentralized token economy.</p>
      </div>
      <div ref="innovation" class="innovation">
        <h1>Accelerate Innovation and Growth</h1>
        <p>BitDAO aims to use significant financial and talent resources to accelerate innovation and growth across the DeFi space.</p>
      </div>
      <div ref="collaboration" class="collaboration">
        <h1>Collaboration</h1>
        <p>BitDAO will collaborate with emerging and existing DeFi protocols and teams — through grants, token swaps, and R&D support. BitDAO will build its own protocols. We seek talented developers, community managers and other contributors to join us.</p>
      </div>
    </div>
  </section>
</template>
<script>
import { gsap, TweenMax } from 'gsap'

export default {
  mounted () {
    const { visionInner, container, vision, innovation } = this.$refs
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
      },
      defaults: { duration: 10 }
    })
    tl.add(TweenMax.from(visionInner, 1, { '-webkit-filter': 'blur(5px)', filter: 'blur(5px);' }), 'first')
      .add(TweenMax.to(vision, 1, { x: 460 }), 'first')
      .add(TweenMax.to(innovation, 1, { x: 700 }), 'first')
    // tl.addLabel('start')
    //   .from(visionInner, { '-webkit-filter': 'blur(5px)', filter: 'blur(5px);' })
    //   .to(vision, { left: 500 })
    //   .to(innovation, { right: 300 })
    //   .addLabel('end')
  }
}
</script>

<style scoped lang="scss">
@mixin flex-start {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
}
.vision-container {
  position: relative;
  background-size: cover;
  background-blend-mode: multiply;
  .vision-inner {
    background: url('@/assets/image/transparent/bg.svg') center center no-repeat;
    background-size: auto;
    background-blend-mode: multiply;
    color: #0E47EF;
    position: relative;
    width: 1450px;
    height: 800px;
    margin: auto;
    // -webkit-filter: blur(5px); filter: blur(5px);
    h1 {
      font-weight: 700;
      font-size: 18px;
      line-height: 36px;
      z-index: 99;
    }
    p {
      font-size: 16px;
      line-height: 27px;
      z-index: 99;
    }
    .vision {
      width: 280px;
      height: 280px;
      border-radius: 50%;
      background-color: #ffffff;
      padding: 50px;
      @include flex-start;
      position: absolute;
      transform: translate(-100px, 150px);
      z-index: 100;
    }
    .innovation {
      width: 400px;
      height: 400px;
      position: absolute;
      padding: 140px 50px 20px;
      @include flex-start;
      transform: translate(1150px, 0);
      z-index: 96;
      &:after {
        content: "";
        position: absolute;
        left: 0; right: 0;
        top: 0; bottom: 0;
        border-radius: 400px 0 0 0;
        background: #F9C2CA;
        transform: rotate(70deg);
        z-index: 1;
      }
    }
    .collaboration {
      width: 492px;
      height: 276px;
      background: #0E47EF;
      color: #ffffff;
      padding: 40px;
      @include flex-start;
      position: absolute;
      bottom: 160px;
      z-index: 98;
      transform: translate(480px, 60px);
    }
  }
}
</style>
