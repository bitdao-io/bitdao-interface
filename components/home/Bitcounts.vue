<template>
  <section ref="container" class="bitcounts-container">
    <div class="bitcounts">
      <h1 ref="title" class="title">
        Every <span class="bit_text">BIT</span> COUNTS
      </h1>
      <div ref="subtitle" class="subtitle">
        <p>BIT holders own BitDAO</p>
        <p>BIT holders control the treasury</p>
      </div>
      <div ref="features" class="features">
        <div ref="feature1" class="feature feature-1">
          <div class="feature_logo">
            <svg-icon icon-class="vote" class="counts-icon" />
          </div>
          <div class="feature_text">
            <p>Vote to <br> deploy treasury <br> assets</p>
          </div>
        </div>
        <div ref="feature2" class="feature feature-2">
          <div class="feature_logo">
            <svg-icon icon-class="game" class="counts-icon" />
          </div>
          <div class="feature_text">
            <p>Vote to update <br>  the protcol</p>
          </div>
        </div>
        <div ref="feature3" class="feature feature-3">
          <div class="feature_logo">
            <svg-icon icon-class="chain" class="counts-icon" />
          </div>
          <div class="feature_text">
            <p>Successful <br> proposals are <br> automatically <br> executed on-chain</p>
          </div>
        </div>
        <div ref="feature4" class="feature feature-4">
          <div class="feature_logo">
            <svg-icon icon-class="leader" class="counts-icon" />
          </div>
          <div class="feature_text">
            <p>Delegate votes to <br> your favourite <br> community <br> leaders</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap, TweenMax } from 'gsap'

export default {
  mounted () {
    // eslint-disable-next-line no-unused-vars
    const { container, title, subtitle, features, feature1, feature2, feature3, feature4 } = this.$refs
    // gsap.to(box, { rotation: 27, x: 100, duration: 1 })
    const tl = gsap.timeline({
    // yes, we can add it to an entire timeline!
      scrollTrigger: {
        trigger: container,
        pin: true, // pin the trigger element while active
        start: 'top 100px', // when the top of the trigger hits the top of the viewport
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
    tl.add(TweenMax.from(container, 1, { '-webkit-filter': 'blur(5px)', filter: 'blur(5px);' }), 'first')
      .add(TweenMax.from(title, 1, { scale: 2.5 }), 'first')

      .add(TweenMax.from(subtitle, 1, { opacity: 0 }), 'second')
      .add(TweenMax.from(features, 1, { '-webkit-filter': 'blur(5px)', filter: 'blur(5px);' }), 'third')

      .add(TweenMax.from(feature1, 1, { x: -650 }), 'third')
      .add(TweenMax.from(feature2, 1, { y: 1350 }), 'third')
      .add(TweenMax.from(feature3, 1, { x: 100 }), 'third')
      .add(TweenMax.from(feature4, 1, { x: 750 }), 'third')
  }
}
</script>

<style scoped lang="scss">
@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.bitcounts-container {
  // padding-top: 100px;
}
.bitcounts {
  background: url('@/assets/image/transparent/bg.svg') top center no-repeat;
  background-size: auto;
  background-blend-mode: multiply;
  width: 1450px;
  height: 800px;
  position: relative;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  .counts-icon {
    font-size: 4rem;
  }
  .title {
    white-space: nowrap;
  }
  h1 {
    font-size: 90px;
    font-weight: 700;
    line-height: 73px;
    color: #0E47EF;
    margin-bottom: 50px;
    .bit_text {
      color: #000;
    }
  }
  p {
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    text-align: center;
  }
  .features {
    @include flex-center;
    flex-direction: row;
    margin-top: 50px;
    position: absolute;
    transform: translate(0, 0);
    .feature-1 {
      transform: translate(-450px, 700px);
    }
    .feature-2 {
      transform: translate(-150px, 700px);
    }
    .feature-3 {
      transform: translate(150px, 700px);
    }
    .feature-4 {
      transform: translate(450px, 700px);
    }
    .feature {
      background: linear-gradient(180deg, #0E47EF, #0E47EF), url('@/assets/image/bitcounts/bg.svg') center center no-repeat;
      background-size: auto;
      background-blend-mode: multiply;
      border-radius: 18px;
      height: 437px;
      width: 242px;
      @include flex-center;
      justify-content: space-around;
      margin-right: 40px;
      position: absolute;
      bottom: 0;
      .feature_logo {
        height: 100px;
        width: 100px;
        background: #fff;
        border-radius: 50%;
        @include flex-center;
      }
      .feature_text {
        text-align: center;
      }
      p {
        color: #fff;
        line-height: 26px;
        font-size: 20px;
      }
    }
  }
}
</style>
