<template>
  <div class="bar-chart">
    <div>
      <p>ETH $10000</p>
      <el-progress :text-inside="true" :stroke-width="26" :percentage="50"></el-progress>
    </div>
    <div>
      <p>ETH $10000</p>
      <el-progress :text-inside="true" :stroke-width="26" :percentage="50"></el-progress>
    </div>
    <div>
      <p>ETH $10000</p>
      <el-progress :text-inside="true" :stroke-width="26" :percentage="50"></el-progress>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    chartData: {
      type: Array,
      default: () => {
        return [['Coin', 'Coin per Day']]
      }
    }
  },
  data () {
    return {
      chartOptions: {
        title: '',
        legend: 'none',
        pieHole: 0.3,
        pieSliceText: 'label',
        backgroundColor: 'transparent',
        colors: ['#2659F1', '#FAC2CB', '#5CC7F1'],
        fontName: 'Space Grotesk'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.bar-chart {
  width: 300px;
  height: 300px;
}
</style>
