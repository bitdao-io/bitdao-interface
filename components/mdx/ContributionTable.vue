<template>
  <div class="c-table-container">
    <div class="c-table-title">
      Realized Contribution by Bybit
    </div>
    <client-only>
      <el-table
        :data="list"
        class="c-table"
      >
        <el-table-column
          prop="date"
          label="Date"
        />
        <el-table-column
          prop="asset"
          label="Asset"
        />
        <el-table-column
          prop="valueUsd"
          label="Units"
        />
        <el-table-column
          prop="txHash"
          label="Tx Hash"
        >
          <template slot-scope="scope">
            <a
              rel="noopener noreferrer"
              target="_blank"
              :href="`https://etherscan.io/tx/${scope.row.txHash}`"
            >{{ scope.row.txHash }}</a>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        :hide-on-single-page="true"
        :pager-count="5"
        class="c-pagination"
        background
        layout="prev, pager, next"
        :total="total"
        :page-size="pageSize"
        @current-change="handleCurrentChange"
      />
    </client-only>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [],
      loading: true,
      pageIndex: 1,
      pageSize: 10,
      total: 0
    }
  },
  mounted () {
    this.pageIndex = 1
    this.getHistory(1)
  },
  methods: {
    handleCurrentChange (val) {
      this.pageIndex = val
      this.getHistory(val)
    },
    async getHistory (pageIndex) {
      this.loading = true
      const data = await this.$axios.$get(`/api/service/inject-history?page=${pageIndex}&size=${this.pageSize}`)
      this.loading = false
      if (data.success === true) {
        const { list, total } = data.body
        this.list = list
        this.total = total
      }
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
    max-width: 1000px;
    width: 100%;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    border-bottom: 1px solid #EBEEF5;
  }
  .c-table {
    max-width: 1000px;
    width: 100%;
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
@media screen and (max-width: 800px){
  .c-table-container {
    .c-table-title {
      padding: 20px 10px;
    }
  }
  /deep/ {
    .el-table th>.cell, .el-table .cell {
      padding: 0 10px;
    }
  }
}
</style>
