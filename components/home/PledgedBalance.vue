<template>
  <div class="chart">
    <el-table
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column
        prop="period"
        label="Period"
      />
      <el-table-column
        prop="average"
        label="Daily Average"
      />
      <el-table-column
        prop="annual"
        label="Annualized"
      />
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [{
        period: 'Yesterday',
        average: '$2.5M',
        annual: '$912M'
      }, {
        period: 'Last 7 days',
        average: '$2.5M',
        annual: '$912M'
      }, {
        period: 'Last 30 days',
        average: '$2.5M',
        annual: '$912M'
      }, {
        period: 'Last 90 days',
        average: '$2.5M',
        annual: '$912M'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.chart {
  height: 300px;
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
  .el-table .cell {
    padding-left: 20px;
  }
  .el-table th>.cell {
    padding-left: 20px;
  }
}
@media screen and (max-width: 380px){
  .chart {
    height: auto;
  }
}
</style>
