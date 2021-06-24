<template>
  <section class="treasury">
    <div class="treasury-charts">
      <div class="chart-box">
        <h2 class="title">
          Current Treasury Balance
        </h2>
        <h2 class="total-balance">
          $1,000,000
        </h2>
        <CurrentBalance />
        <p class="tips">
          Estimated $1,000,000,000 +contribution from BitDAO partners per annum
        </p>
      </div>
      <div class="chart-box2">
        <h2 class="title">
          Pledged (*Yet to be injected)
        </h2>
        <h2 class="total-balance">
          $1,000,000
        </h2>
        <PledgedBalance />
      </div>
    </div>
    <a
      href="/faq"
      class="bit-button"
      data-buried="click,banner_treasury_findmore"
      rel="noopener noreferrer"
      target="_blank"
    >
      <span class="bit-button_text">FIND OUT MORE</span>
      <svg-icon icon-class="arrow-right" />
    </a>
  </section>
</template>

<script>
import CurrentBalance from './CurrentBalance.vue'
import PledgedBalance from './PledgedBalance.vue'

export default {
  components: {
    CurrentBalance,
    PledgedBalance
  },
  data () {
    return {
      tweenedNumber: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.treasury {
  background: linear-gradient(#D9E5F3, #E4E8F4);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 600px;
  padding-top: 200px;
  .treasury-charts {
    display: flex;
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
    background: #FFFFFF;
    box-shadow: 0px 208.675px 166.94px rgba(15, 72, 239, 0.07), 0px 26.1294px 20.9036px rgba(15, 72, 239, 0.035), 0px 5.77458px 4.61966px rgba(15, 72, 239, 0.1);
    border-radius: 30px;
    color: #2658EF;
    padding: 20px 40px;
    width: 380px;
    margin-right: 40px;
    .title {
      font-weight: normal;
      font-size: 18px;
      line-height: 38px;
      margin-bottom: 20px;
    }
    .total-balance {
      font-size: 50px;
      font-weight: 700;
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
    border-radius: 30px;
    color: #fff;
    padding: 20px 40px;
    width: 380px;
    .title {
      font-weight: normal;
      font-size: 18px;
      line-height: 38px;
      margin-bottom: 20px;
    }
    .total-balance {
      font-size: 50px;
      font-weight: 700;
    }
    .tips {
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
    }
  }
}
</style>
