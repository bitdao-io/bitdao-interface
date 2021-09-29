<template>
  <div class="bar-chart">
    <div class="balance-progress">
      <div class="balance-progress__text">
        <span>ETH</span>
        <span>${{ ethInUsd.toLocaleString() }}</span>
      </div>
      <el-progress :show-text="false" color="#3CA3D6" :stroke-width="18" :percentage="ethPrecent" />
    </div>
    <div class="balance-progress">
      <div class="balance-progress__text">
        <span>BIT</span>
        <span>${{ bitInUsd.toLocaleString() }}</span>
      </div>
      <el-progress :show-text="false" color="#F9C3CB" :stroke-width="18" :percentage="bitPrecent" />
    </div>
    <div class="balance-progress">
      <div class="balance-progress__text">
        <span>xSUSHI</span>
        <span>${{ xsushiInUsd.toLocaleString() }}</span>
      </div>
      <el-progress :show-text="false" color="#5cc7f1" :stroke-width="18" :percentage="xsushiPrecent" />
    </div>
    <div class="balance-progress">
      <div class="balance-progress__text">
        <span>USDT</span>
        <span>${{ usdtInUsd.toLocaleString() }}</span>
      </div>
      <el-progress :show-text="false" color="#f69baa" :stroke-width="18" :percentage="usdtPrecent" />
    </div>
    <div class="balance-progress">
      <div class="balance-progress__text">
        <span>USDC</span>
        <span>${{ usdcInUsd.toLocaleString() }}</span>
      </div>
      <el-progress :show-text="false" color="#94dbfe" :stroke-width="18" :percentage="usdcPrecent" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    chartData: {
      type: Object,
      default: () => {
        return {
          ethCount: 0,
          bitCount: 0,
          xsushiCount: 0,
          usdtCount: 0,
          usdcCount: 0,
          usdTotal: 0,
          ethPrice: 0
        }
      }
    }
  },
  computed: {
    ethInUsd () {
      const { ethCount = 100, ethPrice = 1000 } = this.chartData
      return parseInt(ethCount * ethPrice)
    },
    ethPrecent () {
      const { ethCount = 0, ethPrice = 0, usdTotal = 0 } = this.chartData
      if (usdTotal === 0) { return 0 }
      return (ethCount * ethPrice) / usdTotal * 100
    },
    bitInUsd () {
      const { bitCount = 0, bitPrice = 0 } = this.chartData
      return parseInt(bitCount * bitPrice)
    },
    bitPrecent () {
      const { bitCount = 0, usdTotal = 0, bitPrice = 0 } = this.chartData
      if (usdTotal === 0) { return 0 }
      return (bitCount * bitPrice) / usdTotal * 100
    },
    xsushiInUsd () {
      const { xsushiCount = 0, xsushiPrice = 0 } = this.chartData
      return parseInt(xsushiCount * xsushiPrice)
    },
    xsushiPrecent () {
      const { xsushiCount = 0, usdTotal = 0, xsushiPrice = 0 } = this.chartData
      if (usdTotal === 0) { return 0 }
      return (xsushiCount * xsushiPrice) / usdTotal * 100
    },
    usdtInUsd () {
      const { usdtCount } = this.chartData
      return parseInt(usdtCount)
    },
    usdtPrecent () {
      const { usdtCount = 0, usdTotal = 0 } = this.chartData
      if (usdTotal === 0) { return 0 }
      return usdtCount / usdTotal * 100
    },
    usdcInUsd () {
      const { usdcCount } = this.chartData
      return parseInt(usdcCount)
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

  .balance-progress {
    margin: 20px 0;
    .balance-progress__text {
      padding: 5px 10px;
      color: #3CA3D6;
      font-size: 16px;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}
/deep/ {
  .el-progress-bar {
    padding-right: 0;
    width: 100%;
    margin-right: 0;
    box-sizing: border-box;
  }
}
</style>
