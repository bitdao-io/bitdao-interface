<template>
  <div class="chart">
    <client-only>
      <el-table
        :data="tableData"
        style="width: 100%"
      >
        <el-table-column
          prop="period"
          :label="$t('Period')"
        />
        <el-table-column
          prop="average"
          :label="$t('Daily Average')"
        />
        <el-table-column
          prop="annual"
          :label="$t('Annualized')"
        />
      </el-table>
    </client-only>
  </div>
</template>

<script>
// import numeral from 'numeral'
// import API from '@/utils/APIs'
import { abbreviateNumber } from '@/utils/util'

export default {
  data () {
    return {
      tableData: [{
        period: this.$t('Yesterday'),
        average: '-',
        annual: '-'
      }, {
        period: this.$t('LastDays', [7]),
        average: '-',
        annual: '-'
      }, {
        period: this.$t('LastDays', [30]),
        average: '-',
        annual: '-'
      }, {
        period: this.$t('LastDays', [90]),
        average: '-',
        annual: '-'
      }],
      loading: true
    }
  },
  mounted () {
    this.getChart90d()
  },
  methods: {
    async getChart90d () {
      this.loading = true
      const data = await this.$axios.$get(this.$config.chartApi)
      this.loading = false
      if (data.success === true) {
        this.handleData(data.body.list)
      }
    },
    handleData (list) {
      const len = list.length
      const periods = [{
        period: 1,
        totalUsd: 0
      }, {
        period: 7,
        totalUsd: 0
      }, {
        period: 30,
        totalUsd: 0
      }, {
        period: 90,
        totalUsd: 0
      }]
      const _tableData = [{
        period: this.$t('Yesterday'),
        average: 0,
        annual: 0
      }, {
        period: this.$t('LastDays', [7]),
        average: 0,
        annual: 0
      }, {
        period: this.$t('LastDays', [30]),
        average: 0,
        annual: 0
      }, {
        period: this.$t('LastDays', [90]),
        average: 0,
        annual: 0
      }]
      // const format = '($0.00a)'
      // const formatNoDecimal = '($0a)'
      for (let i = 0; i < len; i++) {
        const item = list[i]
        const totalUsd = item.ethAmount + item.usdcAmount + item.usdtAmount
        periods.forEach((item) => {
          if (i <= item.period - 1) {
            item.totalUsd += totalUsd
          }
        })
      }
      for (let i = 0; i < periods.length; i++) {
        const item = periods[i]
        const dailyUsd = (item.totalUsd / item.period)
        const annualUsd = ((item.totalUsd / item.period) * 365)
        if (item.period > len) {
          _tableData[i].average = '-'
          _tableData[i].annual = '-'
        } else {
          _tableData[i].average = abbreviateNumber(dailyUsd)
          _tableData[i].annual = abbreviateNumber(annualUsd)
        }
      }
      this.tableData = _tableData
    }
  }
}
</script>

<style lang="scss" scoped>
.chart {
  height: 280px;
}
/deep/ {
  .el-table th, .el-table tr, .el-table, .el-table__expanded-cell {
    background-color: transparent;
  }
  .el-table, .el-table thead {
    color: #FFFFFF;
  }
  .el-table td, .el-table th.is-leaf {
    border-bottom: 1px solid rgba(96, 135, 247, 0.5);
  }
  .el-table--border::after, .el-table--group::after, .el-table::before {
    display: none;
  }
  .el-table--enable-row-hover .el-table__body tr:hover>td {
    background-color: rgba(0,0,0,0.1);
  }
  .el-table {
    th:first-child>.cell {
      padding-left: 10px;
    }
    th:not(:first-child)>.cell{
      text-align: center;
    }
  }
  .el-table__empty-text {
    color: #FFFFFF;
  }
  .el-table__row {
    td:first-child {
      .cell {
        padding-left: 10px;
      }
    }
    td:not(:first-child) {
      .cell {
        text-align: center;
        text-transform: uppercase;
      }
    }
  }
}
@media screen and (max-width: 380px){
  .chart {
    height: auto;
  }
}
</style>
