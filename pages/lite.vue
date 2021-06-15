<template>
  <div class="container">
    <div class="logo">
      <img src="@/assets/image/logo.svg" alt="">
    </div>
    <p class="comingsoon">
      coming soon
    </p>
    <div class="media">
      <a
        href="https://twitter.com/BitDAO_Official"
        data-buried="'click','footer','twitter'"
        rel="noopener noreferrer"
        target="_blank"
        class="media-logo"
      >
        <img src="@/assets/image/media/twitter.png" alt="twitter">
      </a>
      <a
        href="https://discord.gg/ybNZCKPA"
        data-buried="'click','footer','discord'"
        rel="noopener noreferrer"
        target="_blank"
        class="media-logo"
      >
        <img src="@/assets/image/media/discord.svg" alt="discord">
      </a>
      <a
        href="https://t.me/BitDAO_Official"
        data-buried="'click','footer','telegram'"
        rel="noopener noreferrer"
        target="_blank"
        class="media-logo"
      >
        <img src="@/assets/image/media/telegram.png" alt="telegram">
      </a>
      <a
        href="https://medium.com/bitdao"
        data-buried="'click','footer','medium'"
        rel="noopener noreferrer"
        target="_blank"
        class="media-logo"
      >
        <img src="@/assets/image/media/medium.png" alt="medium">
      </a>
      <a
        href="https://github.com/BitDAOProtocol"
        data-buried="'click','footer','github'"
        rel="noopener noreferrer"
        target="_blank"
        class="media-logo"
      >
        <img src="@/assets/image/media/github.svg" alt="github">
      </a>
    </div>
    <div class="circle-bg" />
  </div>
</template>

<script>
export default {
  head: {
    titleTemplate: '🔜 BitDAO Coming Soon 🍕',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0' },
      { hid: 'description', name: 'description', content: 'Meta description' }
    ]
  }
}
</script>

<style lang="scss" scoped>
.container {
  background: #fff;
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  .logo {
    z-index: 20;
    text-align: center;
    background: rgba(256, 256, 256, 0.5);
    box-shadow: 10px 10px 100px 0px #fff;
    img {
      width: 600px;
    }
  }
  .comingsoon {
    text-align: center;
    font-weight: 700;
    font-size: 48px;
    line-height: 62px;
    letter-spacing: 50px;
    text-indent: 50px;
    text-transform: uppercase;
    color: #0E47EF;
    margin-bottom: 100px;
    padding: 20px;
    z-index: 20;
    display: inline-block;
  }
  .media {
    z-index: 20;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    bottom: 80px;
    max-width: 400px;
    width: 100%;
    padding: 0 20px;
    .media-logo {
      position: relative;
      padding: 10px;
      width: 42px;
      height: 42px;
      box-sizing: border-box;
      border-radius: 50%;
      background: linear-gradient(180deg, #EB8A90 35.98%, #F9C2CA 146.97%);
      box-shadow: 0px 2px 4px rgba(235, 138, 144, 0.28);
      img {
        width: 100%;
        height: auto;
      }
    }
  }
  .circle-bg {
    z-index: 10;
    position: absolute;
    width: 150vh;
    height: 150vh;
    top: -105vh;
    border-radius: 50%;

    background: #FFFFFF;
    box-shadow: -30px 35px 25px 50px rgba(249, 194, 202, 0.25);
    transform: rotate(136deg);
  }
}
@media screen and (max-width: 980px) {
  .container {
    .comingsoon {
      font-size: 2.5rem;
    }
  }
}
@media screen and (max-width: 600px) {
  .container {
    .logo {
      img {
        width: 100%;
      }
    }
    .comingsoon {
      letter-spacing: 2rem;
      text-indent: 0;
      padding-left: 50px;
    }
    .media {
      flex-wrap: wrap;
    }
  }
}
</style>
