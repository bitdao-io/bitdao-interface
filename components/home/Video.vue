<template>
  <section class="video-container">
    <video
      class="home-video"
      autoPlay
      loop
      muted
      playsinline
    >
      <source src="@/assets/BitDAO.mp4" type="video/mp4">
    </video>
  </section>
</template>

<script>
export default {
}
</script>
<style lang="scss" scoped>
.video-container {
  .home-video {
    width: 100%;
    // height: calc(100vh - 52px);
    // min-width: 1280px;
    // margin: auto;
    display: block;
  }
}
</style>
