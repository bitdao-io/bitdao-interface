<template>
  <div class="chart">
    <GChart
      type="PieChart"
      :data="chartData"
      :options="chartOptions"
      class="pie-chart"
    />
  </div>
</template>

<script>
import { GChart } from 'vue-google-charts'
export default {
  components: {
    GChart
  },
  data () {
    return {
      chartData: [
        ['Coin', 'Coin per Day'],
        ['ETH', 38000],
        ['USDC', 19000],
        ['USDT', 19000]
      ],
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
// .chart {
//   width: 800px;
//   background: transparent;
// }
.pie-chart {
  width: 300px;
  height: 300px;
}
</style>
