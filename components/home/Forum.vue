<template>
  <section ref="container" class="forum-container">
    <p>{{ $t('participate.p1') }}</p>
    <p>{{ $t('participate.p2') }}</p>
    <a
      ref="button"
      href="https://discourse-test.bitdao.io/"
      class="bit-button"
      data-buried="'click','home','participate now'"
      rel="noopener noreferrer"
      target="_blank"
    >
      <span class="bit-button_text">{{ $t('participate.button') }}</span>
      <svg-icon icon-class="arrow-right" />
    </a>
    <div ref="trapezoid" class="trapezoid" />
  </section>
</template>
<script>
import { gsap, TweenMax } from 'gsap'

export default {
  mounted () {
    // eslint-disable-next-line no-unused-vars
    const { container, button, trapezoid } = this.$refs
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
    tl.add(TweenMax.from(button, 1, { opacity: 0 }), 'first')
      .add(TweenMax.from(trapezoid, 1, { opacity: 0.3 }), 'first')
  }
}
</script>

<style scoped lang="scss">
.forum-container {
  background-size: auto;
  background-blend-mode: multiply;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  p {
    font-weight: 700;
    font-size: 28px;
    color: #000;
    line-height: 73px;
    z-index: 99;
  }
  .trapezoid {
    width: 120%;
    height: 90%;
    clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
    background: #fff;
    position: absolute;
    z-index: 1;
    background: linear-gradient(180.02deg, rgba(255, 255, 255, 0) 0.02%, #FFFFFF 55.21%, rgba(255, 255, 255, 0) 99.99%);
  }
  a {
    z-index: 99;
  }
}
</style>
