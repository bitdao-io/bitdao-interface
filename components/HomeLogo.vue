<template>
  <div class="home">
    <div class="home-inner">
      <img class="logo" src="@/assets/image/logo.svg" alt="LOGO">
      <h1 class="title"><span>Every</span> Bit <span>Counts</span></h1>
      <h2 class="subtitle">
        Help allocate the world's largest DAO-directed treasury, partner with leading protocols, and build the future of finance.
      </h2>
      <a
        href="https://docs.bitdao.io/"
        data-buried="'click,banner_learnmore"
        rel="noopener noreferrer"
        class="bit-button bit-button-blue"
        target="_blank"
      >
        <span class="bit-button_text">Learn More</span>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  background: url(@/assets/image/bg.png);
  background-size:cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 78px);
  min-height: 600px;
  max-height: 1000px;
  .home-inner {
    max-width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  img.logo {
    width: 80%;
  }
  h1.title {
    color: #000;
    font-size: 3rem;
    text-transform: uppercase;
    span:first-child {
      color: #3CA3D6;
    }
    span:last-child {
      color: #F9C3CB;
    }
  }
  h2.subtitle {
    font-size: 1.2rem;
    line-height: 2rem;
    margin: 2rem 0 4rem;
    text-align: center;
  }
}

@media screen and (max-width: 800px){
  .home {
    padding: 3rem 1rem;
    min-height: auto;
    img.logo {
      width: 100%;
    }
    h1.title {
      font-size: 2rem;
    }
  }
}
</style>
