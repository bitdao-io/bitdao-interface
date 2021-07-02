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
        colors: ['#3CA3D6', '#FAC2CB', '#5CC7F1'],
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
