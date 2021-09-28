<template>
  <div class="trading-chart-container">
    <div class="title">
      <div class="parameters-section">
        <h3 class="analyze-section-title">
          Parameters
        </h3>
        <p>
          See:
          <a
            href="http://docs.bitdao.io/partners/bybit-pledge"
            rel="noopener noreferrer"
            target="_blank"
          >
            http://docs.bitdao.io/partners/bybit-pledge
          </a>
        </p>
      </div>
      <!-- <h2 class="analyze-section-title">Chart</h2> -->
      <!-- <h1>Daily Contribution by BitDAO Partners (Including Pledged and Actual)</h1> -->
      <!-- <p>Total Contribution in USD Equivalent (Including Pledged and Actual): ${{ usdTotal }}</p> -->
    </div>
    <!-- <GChart
      type="ColumnChart"
      :data="chartData"
      :options="chartOptions"
      class="trading-chart"
    /> -->
  </div>
</template>

<script>
// import { GChart } from 'vue-google-charts'
import API from '@/utils/APIs'

export default {
  components: {
    // GChart
  },
  data () {
    return {
      chartData: [
        ['Date', 'Contribute Volume']
      ],
      usdTotal: 0,
      chartOptions: {
        chartArea: { width: '85%', height: '80%' },
        backgroundColor: 'transparent',
        bar: { groupWidth: 18 },
        colors: ['#5CC7F1'],
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
          title: 'Bybit Contribution',
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
    // this.getData()
  },
  methods: {
    handleEmptyCharts () {
      const emptyArr = ['', 0]
      this.chartData = [...this.chartData, emptyArr]
      this.chartOptions.vAxis.maxValue = 10000000000
    },
    async getData () {
      try {
        const charts = await this.$axios.$get(API.chart, { params: { day: 30 } })
        if (charts.success === true) {
          const chartData = []
          const { list = [] } = charts.body
          if (list && list.length > 0) {
            list.forEach((item) => {
              const { date, contributeVolume } = item
              chartData.push([date, contributeVolume])
            })
            this.chartData = [...this.chartData, ...chartData]
          } else {
            this.handleEmptyCharts()
          }
        } else {
          this.handleEmptyCharts()
        }
        const balance = await this.$axios.$get(API.pledgeSum)
        if (balance.success === true) {
          this.usdTotal = balance.body.sumUsd || 0
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
  // height: 550px;
  // margin-bottom: 100px;
  .title {
    // h1, p {
    //   font-size: 16px;
    //   font-weight: 500;
    //   color: #3CA3D6;
    //   line-height: 30px;
    // }
    p {
      line-height: 20px;
      a {
        color: #0E47EF;
      }
    }
    .parameters-section {
      margin-bottom: 2rem;
    }
  }
  .trading-chart {
    height: 500px;
    width: 100%;
  }
}
</style>
