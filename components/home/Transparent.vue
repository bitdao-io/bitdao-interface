<template>
  <section ref="container" class="transparent-container">
    <div class="transparent">
      <h1>Transparent, Collaborative, Transformative</h1>
      <div class="transparent-bg2">
        <img src="@/assets/image/transparent/bg2.svg" alt="">
      </div>
      <div ref="line" class="transparent-lines">
        <img src="@/assets/image/transparent/line.svg" alt="line">
      </div>
    </div>
  </section>
</template>
<script>
import { gsap, TweenMax } from 'gsap'

export default {
  mounted () {
    const { container, line } = this.$refs
    // gsap.to(box, { rotation: 27, x: 100, duration: 1 })
    const tl = gsap.timeline({
    // yes, we can add it to an entire timeline!
      scrollTrigger: {
        trigger: container,
        pin: true, // pin the trigger element while active
        start: 'top top', // when the top of the trigger hits the top of the viewport
        // end: '+=500', // end after scrolling 500px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        snap: {
          snapTo: 'labels', // snap to the closest label in the timeline
          duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
          delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
          ease: 'power1.inOut' // the ease of the snap animation ("power3" by default)
        }
      }
    })
    tl.add(TweenMax.from(line, 10, { opacity: 0 }), 'first')
  }
}
</script>

<style scoped lang="scss">
.transparent-container {
  position: relative;
  // background: linear-gradient(180deg, #E4E8F4 0%, #EAEAF5 100%);
  background-size: cover;
  background-blend-mode: multiply;
}
.transparent {
  background: url('@/assets/image/transparent/bg.svg') center center no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 1450px;
  height: 700px;
  margin: auto;
  h1 {
    font-size: 42px;
    font-weight: 700;
    z-index: 10;
  }
  .transparent-bg2 {
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 9;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .transparent-lines {
    position: absolute;
    top: 80px;
    left: 0;
    z-index: 8;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
