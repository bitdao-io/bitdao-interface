<template>
  <div class="bar-chart">
    <div class="balance-progress">
      <div class="balance-progress__text">
        <span>ETH</span>
        <span>{{ ethInUsd }}</span>
      </div>
      <el-progress :show-text="false" color="#2659F1" :stroke-width="18" :percentage="ethPrecent" />
    </div>
    <div class="balance-progress">
      <div class="balance-progress__text">
        <span>USDT</span>
        <span>{{ usdtInUsd }}</span>
      </div>
      <el-progress :show-text="false" color="#F9C3CB" :stroke-width="18" :percentage="usdtPrecent" />
    </div>
    <div class="balance-progress">
      <div class="balance-progress__text">
        <span>USDC</span>
        <span>{{ usdcInUsd }}</span>
      </div>
      <el-progress :show-text="false" color="#5CC7F1" :stroke-width="18" :percentage="usdcPrecent" />
    </div>
  </div>
</template>

<script>
import numeral from 'numeral'
const format = '($0.00a)'

export default {
  props: {
    chartData: {
      type: Object,
      default: () => {
        return {
          ethCount: 0,
          usdtCount: 0,
          usdcCount: 0,
          usdTotal: 0,
          ethPrice: 0
        }
      }
    }
  },
  data () {
    return {
    }
  },
  computed: {
    ethInUsd () {
      const { ethCount = 0, ethPrice = 0 } = this.chartData
      return numeral(ethCount * ethPrice).format(format)
    },
    ethPrecent () {
      const { ethCount = 0, ethPrice = 0, usdTotal = 0 } = this.chartData
      if (usdTotal === 0) { return 0 }
      return (ethCount * ethPrice) / usdTotal * 100
    },
    usdtInUsd () {
      const { usdtCount } = this.chartData
      return numeral(usdtCount).format(format)
    },
    usdtPrecent () {
      const { usdtCount = 0, usdTotal = 0 } = this.chartData
      if (usdTotal === 0) { return 0 }
      return usdtCount / usdTotal * 100
    },
    usdcInUsd () {
      const { usdcCount } = this.chartData
      return numeral(usdcCount).format(format)
    },
    usdcPrecent () {
      const { usdcCount = 0, usdTotal = 0 } = this.chartData
      if (usdTotal === 0) { return 0 }
      return usdcCount / usdTotal * 100
    }
  }
}
</script>

<style lang="scss" scoped>
.bar-chart {
  padding: 0 10px;
  width: 100%;
  height: 240px;
  .balance-progress {
    margin: 20px 0;
    .balance-progress__text {
      padding: 5px 10px;
      color: #2659F1;
      font-size: 16px;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}
</style>
