<template>
  <div class="trading-chart-container">
    <div class="title">
      <h1>Daily Contribution by Bybit</h1>
      <p>Total Contribution in USD Equivalent: $******</p>
    </div>
    <GChart
      type="ColumnChart"
      :data="chartData"
      :options="chartOptions"
      class="trading-chart"
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
        ['Date', 'ETH', 'USDT', 'USDC'],
        ['2021-07-01', 1000, 400, 200],
        ['2021-07-02', 1170, 460, 250],
        ['2021-07-03', 660, 1120, 300],
        ['2021-07-04', 1030, 540, 350],
        ['2021-07-04', 1030, 540, 350],
        ['2021-07-04', 1030, 540, 350],
        ['2021-07-04', 1030, 540, 350],
        ['2021-07-04', 1030, 540, 350]
      ],
      chartOptions: {
        chartArea: { width: '85%', height: '80%' },
        backgroundColor: 'transparent',
        bar: { groupWidth: 50 },
        colors: ['#5CC7F1', '#F8C3CB', '#0E47F0'],
        legend: {
          position: 'top',
          alignment: 'end',
          textStyle: {
            color: '#ccc'
          }
        },
        hAxis: {
          title: 'Date',
          titleTextStyle: {
            color: '#ccc',
            italic: true
          },
          textStyle: {
            color: '#ccc',
            italic: true
          },
          textPosition: 'out',
          baselineColor: '#ccc'
        },
        vAxis: {
          baselineColor: '#ccc',
          title: 'USD',
          titleTextStyle: {
            color: '#ccc',
            italic: true
          },
          textStyle: {
            color: '#ccc',
            italic: true
          },
          textPosition: 'out',
          gridlines: {
            color: '#e6e6e6'
          },
          minorGridlines: {
            color: 'transparent'
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.trading-chart-container {
  width: 100%;
  max-width: 1000px;
  height: 550px;
  margin-bottom: 100px;
  .title {
    margin-left: 10px;
    h1, p {
      font-size: 14px;
      font-weight: 500;
      color: #0E47EF;
    }
  }
  .trading-chart {
    height: 500px;
    width: 100%;
  }
}
</style>
