<template>
  <div class="container">
    <div class="logo">
      <img src="@/assets/image/logo.svg" alt="">
    </div>
    <div class="comingsoon">
      COMING SOON
    </div>
    <div class="media">
      <div class="media-logo">
        <img src="@/assets/image/media/twitter.png" alt="twitter">
      </div>
      <div class="media-logo">
        <img src="@/assets/image/media/discord.svg" alt="discord">
      </div>
      <div class="media-logo">
        <img src="@/assets/image/media/telegram.png" alt="telegram">
      </div>
      <div class="media-logo">
        <img src="@/assets/image/media/medium.png" alt="medium">
      </div>
      <div class="media-logo">
        <img src="@/assets/image/media/github.svg" alt="github">
      </div>
    </div>
    <div class="circle-bg"></div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.container {
  background: #fff;
  height: 100vh;
  width: 100%;
  padding: 200px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  .logo {
    z-index: 20;
  }
  .comingsoon {
    font-weight: 700;
    font-size: 48px;
    line-height: 62px;
    letter-spacing: 50px;
    text-transform: uppercase;
    color: #0E47EF;
    margin-top: 20px;
    margin-bottom: 100px;
    z-index: 20;
  }
  .media {
    z-index: 20;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 80px;
    .media-logo {
      padding: 10px;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: linear-gradient(180deg, #EB8A90 35.98%, #F9C2CA 146.97%);
      box-shadow: 0px 2px 4px rgba(235, 138, 144, 0.28);
      &:not(:last-child) {
        margin-right: 40px;
      }
      img {
        width: 100%;
        height: auto;
      }
    }
  }
  .circle-bg {
    z-index: 10;
    position: absolute;
    width: 1200px;
    height: 1200px;
    top: -60%;
    border-radius: 50%;

    background: #FFFFFF;
    box-shadow: -30px 35px 25px 20px rgba(249, 194, 202, 0.25);
  }
}
</style>
