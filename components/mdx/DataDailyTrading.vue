<template>
  <div class="chart">
    <GChart
      type="ColumnChart"
      :data="chartData"
      :options="chartOptions"
    />
  </div>
</template>

<script>
// const BASE_URL = 'http://www.public-test-1.bitdao.io'
// export default {
//   data () {
//     return {
//     }
//   },
//   created () {
//     this.getData()
//   },
//   methods: {
//     getData () {
//       console.log('getData')
//       this.$axios.$get(`${BASE_URL}/api/service/volume-24h`).then((res) => {
//         console.log(res)
//       })
//     }
//   }
// }
</script>

<script>
import { GChart } from 'vue-google-charts'
export default {
  components: {
    GChart
  },
  data () {
    return {
      chartData: [
        ['Year', 'Sales', 'Expenses', 'Profit'],
        ['2014', 1000, 400, 200],
        ['2015', 1170, 460, 250],
        ['2016', 660, 1120, 300],
        ['2017', 1030, 540, 350]
      ],
      chartOptions: {
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017'
        }
      }
    }
  }
}
</script>
