<template>
  <section class="partner">
    <div class="partner-top">
      <h1><span>Lead</span> Investors</h1>
      <div class="partner-item-container">
        <div class="partner-item">
          <div class="partner-logo"></div>
          <p>Peter Thiel</p>
        </div>
        <div class="partner-item">
          <div class="partner-logo"></div>
          <p>Alan Howard</p>
        </div>
        <div class="partner-item">
          <div class="partner-logo"></div>
          <p>Pantera</p>
        </div>
        <div class="partner-item">
          <div class="partner-logo"></div>
          <p>Founders Fund</p>
        </div>
      </div>
    </div>
    <div class="partner-bottom">
      <div class="partner-bottom-left">
        <h1><span>Advised</span> by</h1>
        <div class="partner-item-container">
          <div class="partner-item">
            <div class="partner-logo">
              <img src="@/assets/image/partner/Spartan.svg" alt="Spartan logo">
            </div>
            <p>Spartan</p>
          </div>
          <div class="partner-item">
            <div class="partner-logo">
              <img src="@/assets/image/partner/Dragonfly.svg" alt="Dragonfly logo">
            </div>
            <p>Dragonfly</p>
          </div>
        </div>
      </div>
      <div class="partner-bottom-right">
        <h1><span>Partnered</span> with</h1>
        <div class="partner-item-container">
          <div class="partner-item">
            <div class="partner-logo">
              <img src="@/assets/image/partner/Bybit.svg" alt="Dragonfly logo">
            </div>
            <p>Bybit</p>
          </div>
          <div class="partner-item">
            <div class="partner-logo">
              <img src="@/assets/image/partner/Sushiswap.svg" alt="Dragonfly logo">
            </div>
            <p>Sushiswap</p>
          </div>
          <div class="partner-item">
            <div class="partner-logo"></div>
            <p>Mirana</p>
          </div>
        </div>
      </div>
    </div>
    <div class="investors">
      <h1>Investors</h1>
      <p>Sharmaine Edison, Jerlene Kottwitz, Lorriane Ensley, Toshiko Sorg, Conchita Ervin, Ora Calmes, Erlene Haugh, Bess Lumpkin, Janina Hopp, Karina Vandermeulen, Dion Wimberly, Kecia Facey</p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.partner {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;
  h1 {
    font-size: 32px;
    font-weight: 700;
    color: #1E212C;
    margin-bottom: 45px;
    span {
      color: #0E47EF;
    }
  }
  p {
    font-size: 24px;
    line-height: 48px;
  }
  .partner-bottom, .investors {
    width: 1100px;
    text-align: center;
    margin-bottom: 100px;
  }
  .partner-top {
    width: 800px;
    text-align: center;
    margin-bottom: 100px;
  }
  .partner-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .partner-bottom-left {
    width: 40%;
    margin-right: 20%;
  }
  .partner-bottom-right {
    width: 60%;
  }
  .partner-item-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .partner-item {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      .partner-logo {
        width: 136px;
        height: 136px;
        border-radius: 50%;
        background: linear-gradient(42.01deg, #FFFFFF 13.07%, #ADE1F5 108.36%);
      }
    }
  }
}
</style>
