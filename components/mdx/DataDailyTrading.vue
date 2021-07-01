<template>
  <div class="trading-chart-container">
    <div class="title">
      <h1>Daily Contribution by Bybit</h1>
      <p>Total Contribution in USD Equivalent: ${{ usdTotal }}</p>
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
        ['Date', 'ETH', 'USDT', 'USDC']
      ],
      usdTotal: 0,
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
          minValue: 0,
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
          },
          minValue: 0
        }
      }
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    handleEmptyCharts () {
      const emptyArr = ['', 0, 0, 0]
      this.chartData = [...this.chartData, emptyArr]
      this.chartOptions.vAxis.maxValue = 10000
    },
    async getData () {
      try {
        const charts = await this.$axios.$get('/api/service/chart-30d')
        if (charts.success === true) {
          const chartData = []
          const { list = [] } = charts.body
          if (list && list.length > 0) {
            list.forEach((item) => {
              const { date, ethAmount, usdtAmount, usdcAmount } = item
              chartData.push([date, ethAmount, usdtAmount, usdcAmount])
            })
            this.chartData = [...this.chartData, ...chartData]
          } else {
            this.handleEmptyCharts()
          }
        } else {
          this.handleEmptyCharts()
        }
        const balance = await this.$axios.$get('/api/service/balance')
        if (balance.success === true) {
          this.usdTotal = balance.body.usdTotal || 0
        }
      } catch (error) {
        this.handleEmptyCharts()
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
      font-size: 16px;
      font-weight: 500;
      color: #0E47EF;
      line-height: 30px;
    }
  }
  .trading-chart {
    height: 500px;
    width: 100%;
  }
}
</style>
