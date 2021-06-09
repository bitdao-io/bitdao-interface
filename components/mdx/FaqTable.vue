<template>
  <table class="faq-table" cellpadding="0" cellspacing="0" border="0">
    <colgroup>
      <col width="50%">
      <col width="50%">
    </colgroup>
    <thead class="faq-thead">
      <tr>
        <th>Action</th>
        <th>See Lite Paper Link</th>
      </tr>
    </thead>
    <tbody class="faq-tbody">
      <tr>
        <td>Sign message</td>
        <td><a href="https://bitDAO.finance">https://bitDAO.finance</a></td>
      </tr>
      <tr>
        <td>Submit a proposal</td>
        <td><a href="https://bitDAO.finance">https://bitDAO.finance</a></td>
      </tr>
      <tr>
        <td>Vote on a proposal</td>
        <td><a href="https://bitDAO.finance">https://bitDAO.finance</a></td>
      </tr>
      <tr>
        <td>Delegate votes</td>
        <td><a href="https://bitDAO.finance">https://bitDAO.finance</a></td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped lang="scss">
.faq-table {
  border: 1px solid #D4D4D4;
  border-collapse: collapse;
  border-radius: 16px;
  // border-style:hidden;
  width: 100%;
  color: #000000;
  margin-bottom: 20px;
  th, td {
    border: 1px solid #D4D4D4;
  }
  .faq-thead {
    background: linear-gradient(180deg, rgba(253, 253, 253, 0.08) 0%, #FFF7F8 83.33%);
    tr {
      line-height: 20px;
      border: 1px solid #D4D4D4;
      th {
        padding: 16px;
        font-weight: 600;
        font-size: 16px;
        text-align: center;
      }
    }
  }
  .faq-tbody {
    background-color: #FFFFFF;
    a {
      color: #2C81B8;
    }
    tr {
      line-height: 10px;
      td {
        padding: 16px 40px;
        text-align: left;
      }
    }
  }
}
table tr:first-child th:first-child {
  border-top-left-radius: 12px;
}

table tr:first-child th:last-child {
  border-top-right-radius: 12px;
}
table tr:last-child td:first-child {
  border-bottom-left-radius: 12px;
}

table tr:last-child td:last-child {
  border-bottom-right-radius: 12px;
}
</style>
