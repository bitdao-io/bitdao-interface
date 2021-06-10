<template>
  <table class="faq-table">
    <colgroup>
      <col width="50%">
      <col width="50%">
    </colgroup>
    <thead class="faq-thead">
      <tr>
        <th>Event</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody class="faq-tbody">
      <tr>
        <td><span class="weightSpan">DelegateChanged</span> (address indexed delegator, address indexed fromDelegate, address indexed toDelegate)</td>
        <td>An event thats emitted when an account changes its <span class="colorSpan">delegate</span>.</td>
      </tr>
      <tr>
        <td><span class="weightSpan">DelegateVotesChanged</span> (address indexed delegate, uint previousBalance, uint newBalance)</td>
        <td>An event thats emitted when a delegate account's vote balance changes.</td>
      </tr>
      <tr>
        <td><span class="weightSpan">ProposalCreated</span> (uint id, address proposer, address[ ] targets, uint[ ] values, string[ ] signatures, bytes[ ] calldatas, uint startBlock, uint endBlock, string description)</td>
        <td>An event emitted when a new proposal is created.</td>
      </tr>
      <tr>
        <td><span class="weightSpan">VoteCast</span> (address voter, uint proposalId, bool support, uint votes)</td>
        <td>An event emitted when a vote has been cast on a proposal.</td>
      </tr>
      <tr>
        <td><span class="weightSpan">ProposalCanceled</span> (uint id)</td>
        <td>An event emitted when a proposal has been <span class="colorSpan">canceled</span>.</td>
      </tr>
      <tr>
        <td><span class="weightSpan">ProposalQueued</span> (uint id, uint eta)</td>
        <td>An event emitted when a proposal has been <span class="colorSpan">queued</span> in the <span class="colorSpan">Timelock</span>.</td>
      </tr>
      <tr>
        <td><span class="weightSpan">ProposalExecuted</span> (uint id)</td>
        <td>An event emitted when a proposal has been <span class="colorSpan">executed</span> in the <span class="colorSpan">Timelock</span>.</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped lang="scss">
.weightSpan {
  font-weight: 600;
}
.colorSpan {
  color: #00dfff;
}
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
    line-height: 22px;
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
        padding: 10px 20px;
        text-align: left;
        vertical-align: middle;
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
