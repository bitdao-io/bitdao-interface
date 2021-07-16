<template>
  <div class="c-table-container">
    <h1 class="analyze-section-title">
      Data
    </h1>
    <div class="c-table-title-container">
      <span class="download-btn" @click="downloadCSV">Download</span>
    </div>
    <div class="c-table-wrapper">
      <client-only>
        <el-table
          :data="list"
          class="c-table pc-table"
        >
          <el-table-column
            prop="date"
            label="Date"
            width="15%"
          />
          <el-table-column
            label="Trade Volume"
            width="20%"
          >
            <template slot-scope="scope">
              <span>
                ${{ parseInt(scope.row.tradeVolume).toLocaleString() }}
              </span>
            </template>
          </el-table-column>
          <el-table-column
            label="Contribution"
            width="20%"
          >
            <template slot-scope="scope">
              <span>
                ${{ parseInt(Number(scope.row.tradeVolume) * 0.00025).toLocaleString() }}
              </span>
            </template>
          </el-table-column>
          <el-table-column
            prop="ethCount"
            label="ETH"
            width="15%"
          >
            <template slot-scope="scope">
              <span>
                {{ parseInt(scope.row.ethCount).toLocaleString() }}
              </span>
            </template>
          </el-table-column>
          <el-table-column
            prop="usdcCount"
            label="USDC"
            width="15%"
          >
            <template slot-scope="scope">
              <span>
                {{ parseInt(scope.row.usdcCount).toLocaleString() }}
              </span>
            </template>
          </el-table-column>
          <el-table-column
            prop="usdtCount"
            label="USDT"
            width="15%"
          >
            <template slot-scope="scope">
              <span>
                {{ parseInt(scope.row.usdtCount).toLocaleString() }}
              </span>
            </template>
          </el-table-column>
        </el-table>
        <el-table
          :data="list"
          class="c-table mobile-table"
        >
          <el-table-column
            prop="date"
            label="Date"
          />
          <el-table-column
            label="Contribution"
          >
            <template slot-scope="scope">
              <span>
                ${{ parseInt(Number(scope.row.tradeVolume) * 0.00025).toLocaleString() }}
              </span>
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
  </div>
</template>

<script>
// import JsonExcel from 'vue-json-excel'
import numeral from 'numeral'
// import Export2Excel from '@/vendor/Export2Excel'
import API from '@/utils/APIs'

export default {
  components: {
    // DownloadExcel: JsonExcel
  },
  data () {
    return {
      list: [],
      rawList: [],
      loading: true,
      pageIndex: 1,
      pageSize: 15,
      total: 0,
      tableData: [],
      showTooltip: false
    }
  },
  mounted () {
    this.pageIndex = 1
    this.getHistory()
  },
  methods: {
    pagination (pageIndex, pageSize, array) {
      const offset = (pageIndex - 1) * pageSize
      return (offset + pageSize >= array.length) ? array.slice(offset, array.length) : array.slice(offset, offset + pageSize)
    },
    handleCurrentChange (val) {
      this.pageIndex = val
      this.list = this.pagination(val, this.pageSize, this.rawList)
    },
    async getHistory () {
      this.loading = true
      const data = await this.$axios.$get(API.chart, { params: { day: 100 } })
      this.loading = false
      if (data.success === true) {
        const { list } = data.body
        this.rawList = list
        this.list = this.pagination(1, this.pageSize, list)
        this.total = list.length
        this.handleList(list)
      }
    },
    handleList (list) {
      const unitFormat = '0.00'
      const priceFormat = '$0.00'
      const result = []
      for (const item of list) {
        // result.push({
        //   Date: item.date,
        //   'Trade Volume': `$${item.tradeVolume.toLocaleString()}`,
        //   '25bps Contribution': numeral(item.tradeVolume * 0.00025).format(priceFormat),
        //   'BTC %': '0%',
        //   'ETH %': '50%',
        //   'USDT %': '25%',
        //   'USDC %': '25%',
        //   // 'BTC Price': '-',
        //   'ETH Price': numeral(ethPrice).format(priceFormat),
        //   'USDC Price': '$1.00',
        //   'USDT Price': '$1.00',
        //   'BTC Units': '0.00',
        //   'ETH Units': numeral(item.ethCount).format(unitFormat),
        //   'USDT Units': numeral(item.usdtCount).format(unitFormat),
        //   'USDC Units': numeral(item.usdcCount).format(unitFormat)
        // })
        result.push([
          item.date,
          `$${item.tradeVolume.toLocaleString()}`,
          numeral(item.tradeVolume * 0.00025).format(priceFormat),
          '0%',
          '50%',
          '25%',
          '25%',
          numeral(item.ethPrice).format(priceFormat),
          '$1.00',
          '$1.00',
          '0.00',
          numeral(item.ethCount).format(unitFormat),
          numeral(item.usdtCount).format(unitFormat),
          numeral(item.usdcCount).format(unitFormat)
        ])
      }
      this.tableData = result
    },
    downloadCSV () {
      import('@/vendor/Export2Excel').then((excel) => {
        const tHeader = ['Date', 'Trade Volume', '2.5bps Contribution', 'BTC %', 'ETH %', 'USDT %', 'USDC %', 'ETHPrice', 'USDC Price', 'USDT Price', 'BTC Units', 'ETH Units', 'USDT Units', 'USDC Units']
        excel.export_json_to_excel({
          header: tHeader, // 表头 必填
          data: this.tableData, // 具体数据 必填
          filename: 'Analytics', // 非必填
          autoWidth: false, // 非必填
          bookType: 'csv' // 非必填
        })
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.c-table-container {
  .download-btn {
    font-weight: 400;
    font-size: 16px;
    color: #121212;
    cursor: pointer;
    &:hover {
      color: #0E47EF;
    }
  }
  .c-table-title-container {
    // font-weight: bold;
    // font-size: 24px;
    // line-height: 31px;
    // color: #3CA3D6;
    background: linear-gradient(180deg, #FFF7F8 28.13%, #FFFFFF 54.17%);
    padding: 30px 10px;
    // max-width: 1000px;
    // width: 100%;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    border-bottom: 1px solid #EBEEF5;
    display: flex;
    justify-content: flex-end;
  }
  .c-table-wrapper {
    // width: 100%;
    position: relative;
  }
  .c-table {
    max-width: 1000px;
    // width: 100%;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
  }
  .c-pagination {
    float: right;
    margin-top: 20px;
  }
  .hash-tag {
    a {
      white-space: nowrap;
      color: #3CA3D6;
    }
  }
  .pc-table {
    display: block;
  }
  .mobile-table {
    display: none;
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
    border: 1px solid #3CA3D6;
    background-color: #fff;
    color: #3CA3D6;
  }
  .el-table th>.cell, .el-table .cell {
    // padding-left: 40px;
    // padding-right: 40px;
    color: #121212;
  }
  .el-table td, .el-table th {
    padding: 10px 0;
  }
  .el-table {
    th:not(:first-child)>.cell{
      text-align: right;
    }
    td:not(:first-child)>.cell{
      text-align: right;
    }
  }
}
@media screen and (max-width: 650px){
  .c-table-container {
    .c-table-title {
      padding: 20px 10px;
    }
    .c-table-title-container {
      padding: 15px 10px;
    }
  }
  /deep/ {
    .el-table th>.cell, .el-table .cell {
      padding: 0 10px;
    }
  }
  .c-table-container {
    .pc-table {
      display: none;
    }
    .mobile-table {
      display: block;
    }
  }
}
</style>
