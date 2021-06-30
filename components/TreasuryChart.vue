<template>
  <section class="treasury">
    <div class="treasury-charts">
      <div class="chart-box">
        <h2 class="title">
          {{ $t('treasury.current') }}
        </h2>
        <h2 class="total-balance">
          $1,000,000
        </h2>
        <CurrentBalance />
        <p class="tips">
          {{ $t('treasury.tips') }}
        </p>
      </div>
      <div class="chart-box2">
        <h2 class="title">
          Partner Contributions
        </h2>
        <p class="subtitle">
          *Pledged and Actual Contributions
        </p>
        <PledgedBalance />
        <p class="tips">
          2.5bps Bybit daily trading volume pledge calculated via CoinGecko API
        </p>
      </div>
    </div>
    <a
      href="/treasury"
      class="bit-button"
      data-buried="click,banner_treasury_findmore"
      rel="noopener noreferrer"
      target="_blank"
    >
      <span class="bit-button_text">{{ $t('Find Out More') }}</span>
      <svg-icon icon-class="arrow-right" />
    </a>
  </section>
</template>

<script>
import CurrentBalance from './home/CurrentBalance.vue'
import PledgedBalance from './home/PledgedBalance.vue'

export default {
  components: {
    CurrentBalance,
    PledgedBalance
  }
}
</script>

<style lang="scss" scoped>
.treasury {
  background: linear-gradient(180deg, #D9E5F3, rgba(247, 238, 246, 0.6));
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 4rem 4rem 10rem;
  .bit-button {
    margin-top: 4rem;
  }
  .treasury-charts {
    display: flex;
    flex-direction: row;
  }
  h1 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  p {
    color: #0E47EF;
    font-size: 96px;
    margin-bottom: 0;
    font-weight: 700;
  }
  .chart-box {
    background: linear-gradient(180deg, #FFEFF0 -20.48%, #FFFFFF 50.8%);
    box-shadow: 0px 208.675px 166.94px rgba(15, 72, 239, 0.07), 0px 26.1294px 20.9036px rgba(15, 72, 239, 0.035), 0px 5.77458px 4.61966px rgba(15, 72, 239, 0.1);
    border-radius: 16px;
    color: #2658EF;
    padding: 20px 40px;
    width: 380px;
    margin-right: 100px;
    text-align: center;
    .title {
      font-weight: normal;
      font-size: 18px;
      line-height: 38px;
      margin-bottom: 20px;
    }
    .total-balance {
      font-size: 50px;
    }
    .tips {
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
    }
  }
  .chart-box2 {
    background: linear-gradient(180deg, #0E47EF 0%, #6288F7 100%);
    box-shadow: 0px 208.675px 166.94px rgba(15, 72, 239, 0.07), 0px 26.1294px 20.9036px rgba(15, 72, 239, 0.035), 0px 5.77458px 4.61966px rgba(15, 72, 239, 0.1);
    border-radius: 16px;
    color: #fff;
    padding: 20px 0;
    width: 380px;
    text-align: center;
    .title {
      font-weight: normal;
      font-size: 24px;
      line-height: 38px;
      padding: 0 20px;
    }
    .subtitle {
      font-size: 14px;
      color: #fff;
      font-weight: 500;
      margin: 10px 0 50px;
    }
    .total-balance {
      font-size: 50px;
      font-weight: 700;
      line-height: 60px;
    }
    .tips {
      color: #fff;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      padding: 0 20px;
    }
  }
}

@media screen and (max-width: 1000px){
  .treasury {
    .treasury-charts {
      flex-direction: column;
      align-items: center;
      .chart-box {
        margin-right: 0;
        margin-bottom: 50px;
      }
    }
  }
}
@media screen and (max-width: 380px){
  .treasury .treasury-charts {
    .chart-box, .chart-box2 {
      padding: 20px 0;
      width: 300px;
      .subtitle {
        margin: 10px 0;
      }
    }
  }
}
</style>
