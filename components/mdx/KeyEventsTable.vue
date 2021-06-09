<template>
  <table class="bit-table">
    <colgroup>
      <col width="45%">
      <col width="55%">
    </colgroup>
    <thead class="bit-thead">
      <tr>
        <th>Event</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody class="bit-tbody">
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
.bit-table {
  table-layout: auto;
  border-collapse: separate;
  border-spacing: 0;
  text-align: left;
  width: 100%;
  background: transparent;
  box-sizing: border-box;
  font-size: 14px;
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
  .bit-thead {
    tr {
      th {
        background: #fafafa;
        border-bottom: 1px solid #f0f0f0;
        color: rgba(0,0,0,.85);
        font-weight: 600;
        font-size: 20px;
        text-align: center;
      }
      th:first-child {
        border-bottom-left-radius: 100px;
        border-top-left-radius: 100px;
      }
      th:last-child {
        border-bottom-right-radius: 100px;
        border-top-right-radius: 100px;
      }
    }
  }
  .bit-tbody {
    tr {
      td {
        color: #FFFFFF;
        border-bottom: 1px solid #FFFFFF;
        overflow-wrap: break-word;
        position: relative;
        box-sizing: border-box;
        padding: 16px;
      }
      td:first-child {
        padding-left: 0;
      }
      td:last-child {
        padding-right: 0;
      }
    }
  }
}

.faq-table {
  border: 1px solid #a7a7a6;
  border-radius: 20px;
  border-collapse: collapse;
  border-style:hidden;
  background-color: #FFFFFF;
  width: 100%;
  color: #000000;
  margin-bottom: 20px;
  th, td {
    border: 1px solid #a7a7a6;
  }
  .faq-thead {
    tr {
      line-height: 20px;
      th {
        padding: 16px;
        font-weight: 600;
        font-size: 16px;
        text-align: center;
      }
    }
  }
  .faq-tbody {
    tr {
      line-height: 10px;
      td {
        padding: 16px;
        text-align: left;
      }
    }
  }
}
</style>
