<template>
  <section class="treasury">
    <div class="treasury-charts">
      <div class="chart-box">
        <h2 class="title">
          {{ $t('treasury.current') }}
        </h2>
        <h2 class="total-balance">
          ${{ parseInt(usdTotal).toLocaleString() }}
        </h2>
        <!-- <div v-if="chartNoData" class="no-data">
          <div class="no-data-chart"></div>
        </div>
        <CurrentBalance v-else :chart-data="chartData" /> -->
        <CurrentBalance :chart-data="barChart" />
        <!-- <p class="tips">
          {{ $t('treasury.tips') }}
        </p> -->
        <div class="box-button-container">
          <a
            href="https://etherscan.io/address/0x78605Df79524164911C144801f41e9811B7DB73D"
            class="bit-button bit-button-blue"
            data-buried="click,banner_treasury_seetreasury"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span class="bit-button_text">{{ $t('SeeTreasury') }}</span>
          </a>
        </div>
      </div>
      <div class="chart-box2">
        <h2 class="title">
          {{ $t('PartnerContributions') }}
        </h2>
        <p class="subtitle" />
        <PledgedBalance />
        <p class="tips" v-html="$t('PartnerContributionsTips')" />
        <div class="box-button-container">
          <a
            :href="`${$i18n.locale === 'en' ? '' : $i18n.locale}/analytics`"
            class="bit-button"
            data-buried="click,banner_treasury_seeanalytics"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span class="bit-button_text">{{ $t('SeeAnalytics') }}</span>
          </a>
        </div>
      </div>
    </div>
    <!-- <a
      href="/analytics"
      class="bit-button"
      data-buried="click,banner_treasury_findmore"
      rel="noopener noreferrer"
      target="_blank"
    >
      <span class="bit-button_text">{{ $t('Find Out More') }}</span>
      <svg-icon icon-class="arrow-right" />
    </a> -->
  </section>
</template>

<script>
import API from '@/utils/APIs'
import CurrentBalance from './CurrentBalance.vue'
import PledgedBalance from './home/PledgedBalance.vue'

export default {
  components: {
    CurrentBalance,
    PledgedBalance
  },
  data () {
    return {
      chartData: [
        ['Coin', 'Coin per Day']
      ],
      usdTotal: 0,
      chartNoData: false,
      barChart: {
        ethCount: 0,
        usdtCount: 0,
        usdcCount: 0,
        usdTotal: 0,
        ethPrice: 0
      }
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    async getData () {
      this.loading = true
      try {
        const data = await this.$axios.$get(API.balance)
        this.loading = false
        if (data.success === true) {
          const chartData = []
          if (!data.body) { this.chartNoData = true } else { this.chartNoData = false }
          const { ethCount, usdtCount, usdcCount, usdTotal, ethPrice } = data.body || {}
          this.barChart = data.body || {}
          chartData.push(['ETH', ethCount * ethPrice])
          chartData.push(['USDC', usdcCount])
          chartData.push(['USDT', usdtCount])
          this.chartData = [...this.chartData, ...chartData]
          this.usdTotal = usdTotal || 0
        }
      } catch (error) {
        this.loading = false
        this.chartNoData = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.treasury {
  // background: linear-gradient(180deg, #D9E5F3, rgba(247, 238, 246, 0.6));
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 4rem 4rem 10rem;
  .no-data {
    font-size: 26px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    .no-data-chart {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      background: linear-gradient(180deg, #3CA3D6 0%, #6288F7 100%);
    }
  }
  .box-button-container {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
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
    color: #3CA3D6;
    font-size: 96px;
    margin-bottom: 0;
    font-weight: 700;
  }
  .chart-box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(180deg, #FFEFF0 -20.48%, #FFFFFF 50.8%);
    box-shadow: 0px 208.675px 166.94px rgba(15, 72, 239, 0.07), 0px 26.1294px 20.9036px rgba(15, 72, 239, 0.035), 0px 5.77458px 4.61966px rgba(15, 72, 239, 0.1);
    border-radius: 16px;
    color: #3CA3D6;
    padding: 20px 40px;
    width: 380px;
    margin-right: 100px;
    text-align: center;
    .title {
      font-weight: normal;
      font-size: 24px;
      line-height: 38px;
      margin-bottom: 20px;
    }
    .total-balance {
      font-size: 2.6rem;
      margin-bottom: 50px;
    }
    .tips {
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
    }
  }
  .chart-box2 {
    background: linear-gradient(180deg, #3CA3D6 0%, #6288F7 100%);
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
      margin: 10px 10px 32px;
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
      margin-top: 20px;
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
      width: 90vw;
      .chart {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .subtitle {
        margin: 10px;
      }
    }
  }
}
</style>
