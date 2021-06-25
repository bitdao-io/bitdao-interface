<template>
  <div class="c-table-container">
    <div class="c-table-title">
      Realized Contribution by Bybit
    </div>
    <client-only>
      <el-table
        :data="tableData"
        class="c-table"
      >
        <el-table-column
          prop="symbol"
          label="Asset"
          width="180"
        />
        <el-table-column
          prop="value"
          label="Value in USD($)"
          width="240"
        />
        <el-table-column
          prop="date"
          label="Injection Date"
          width="200"
        />
        <el-table-column
          prop="hash"
          label="Tx Hash"
        >
          <template slot-scope="scope">
            <a
              rel="noopener noreferrer"
              target="_blank"
              :href="`https://etherscan.io/tx/${scope.row.hash}`"
            >{{ scope.row.hash }}</a>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        class="c-pagination"
        background
        layout="prev, pager, next"
        :total="100"
      />
    </client-only>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [{
        symbol: 'ETH',
        value: '$101,147.19',
        date: '2021/07/01',
        hash: '0x47a7ba4ce8e0a6d1d64faec092add546020717697ed7443b44ef1ee9222fa570'
      }, {
        symbol: 'USDT',
        value: '$266,936.40',
        date: '2021/07/01',
        hash: '0x47a7ba4ce8e0a6d1d64faec092add546020717697ed7443b44ef1ee9222fa570'
      }, {
        symbol: 'USDC',
        value: '$460,855.58',
        date: '2021/07/01',
        hash: '0x47a7ba4ce8e0a6d1d64faec092add546020717697ed7443b44ef1ee9222fa570'
      }, {
        symbol: 'ETH',
        value: '$101,147.19',
        date: '2021/07/01',
        hash: '0x47a7ba4ce8e0a6d1d64faec092add546020717697ed7443b44ef1ee9222fa570'
      }]
    }
  }
}
</script>
<style lang="scss" scoped>
.c-table-container {
  .c-table-title {
    font-weight: bold;
    font-size: 24px;
    line-height: 31px;
    color: #0E47EF;
    background: linear-gradient(180deg, #FFF7F8 28.13%, #FFFFFF 54.17%);
    padding: 30px 40px;
    width: 1000px;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    border-bottom: 1px solid #EBEEF5;
  }
  .c-table {
    width: 1000px;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
  }
  .c-pagination {
    float: right;
    margin-top: 20px;
  }
}
/deep/ {
  .el-pagination.is-background .btn-prev, .el-pagination.is-background .btn-next, .el-pagination.is-background .el-pager li {
    background-color: #fff;
    border: 1px solid #DFE3E8;
    border-radius: 4px;
  }
  .el-pagination.is-background .btn-prev:disabled, .el-pagination.is-background .btn-next:disabled {
    background: #F7F6FD;
  }
  .el-pagination.is-background .el-pager li:not(.disabled).active {
    border: 1px solid #0E47EF;
    background-color: #fff;
    color: #0E47EF;
  }
  .el-table th>.cell, .el-table .cell {
    padding-left: 40px;
    padding-right: 40px;
    color: #121212;
  }
  .el-table td, .el-table th {
    padding: 30px 0;
  }
}
</style>
