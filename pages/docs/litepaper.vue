<template lang="md">

Version: 1.0 <br/>
April 2021

**Authors**<br/>
[https://bitDAO.finance](https://bitDAO.finance)

Special Thanks<br/>
Compound Whitepaper<br/>
[https://compound.finance/documents/Compound.Whitepaper.pdf](https://compound.finance/documents/Compound.Whitepaper.pdf)

**Abstract**<br/>
In this paper, we introduce a treasury protocol that allows for transparency of contribution and deployment of contributed assets through on-chain transactions and public voting. BitDAO will use its reservoir of financial resources to improve innovation, collaboration and growth through DeFi.

# Contents

1. Introduction

2. The BitDAO Protocol<br/>
2.1 BIT Token<br/>
&emsp;2.11 Primary Use Cases<br/>
2.2 Delegation of Votes<br/>
&emsp;2.2.1 Delegation by Signature<br/>
2.3 Proposals<br/>
2.4 Casting of Votes<br/>
&emsp;2.4.1 Casting of Votes by Signature

3. Implementation & Architecture<br/>
3.1 BIT Contracts<br/>
3.2 Staking<br/>
3.3 BIT Token<br/>
3.4 Governance <br/>

# 1.Introduction

Moving power and authority away from centralized institutions and into the hands of the user, Decentralized Finance (DeFi) is opening new gateways to new financial services. So powerful and advantageous is this paradigm shift that we will soon look back on them and question how we ever operated without them.

DeFi protocols make the cryptocurrency and blockchain space capable of what just five years ago was entirely unimaginable: permissionless trading, lending, synthetics, and transactions enabled by the blockchain. This produces a multi-frontal, paradigm-shifting, natural growth area — one that is fueling the digital currency boom, and pushing the boundaries of a new financial frontier. Still, DeFi users currently only make up approximately 1% of the larger crypto community, with barriers towards mainstream user adoption remaining a key limiting factor. For crypto to become the financial infrastructure for the new economy, DeFi and CeFi must further collaborate and grow the industry beyond a segment of early adopters.

In this paper, we introduce a treasury protocol that allows for transparency of contribution and deployment of contributed assets through on-chain transactions and public voting. BitDAO will use its reservoir of financial resources to improve innovation, collaboration and growth through DeFi.

# 2.The BitDAO Protocol

BitDAO is a treasury protocol governed and upgraded by BIT token holders, using three distinct components: the BIT token, governance module (a fork of BitDAO Governor Bravo), and timelock. Together, these contracts allow the community to propose, vote, and implement changes to the BitDAO protocol.

In collaboration with all DeFi and CeFi partners around the globe, BitDAO seeks to forge a path different than those of other platform tokens — focusing on the growth of the overall ecosystem through DeFi, instead of any single proprietary chain. We are inviting the community to collaborate with BitDAO to grow DeFi and the future of finance.

## BIT Token

BIT is an ERC-20 token that serves as both currency and ballot in the BitDAO ecosystem. It is not controlled by any single entity, state or corporate. The decentralized nature of BIT ensures that its ownership is open to anyone. The BIT token allows its owner to delegate voting rights to any address, including their own. Changes to the owner’s token balance automatically adjust the voting rights of the delegate.

### Primary Use Cases

BitDAO allows users to participate in staking, time-weighted voting, time-weighted rewards, multi-level delegated voting, and timelock on delegations. Deployment of assets — whether in grants or swaps — any upgrades made to the protocol will be decided through voting. Successful proposals are automatically executed on-chain.
## Delegation of Votes

Votes can be delegated from the sender to the delegatee. Users can delegate to one (1) address at a time; the number of votes added to the delegatee’s vote count is equivalent to the balance of BIT tokens in the user’s account. Votes are delegated from the current block and onwards, until the sender delegates again, or transfers their BIT.

### Delegation by Signature

This method enables offline signatures to participate in BitDAO governance vote delegation. More details on the creation of offline signatures can be found in the BitDAO Governance Paper.
## Proposals

Proposals will be voted on by delegated voters. If there is sufficient support before the voting period draws to an end, the proposal shall be automatically enacted. Enacted proposals are queued and executed in the BitDAO timelock contract.

## Casting of Votes

Cast a vote on a proposal. An account’s voting weight is determined by the number of votes delegated to it at the time the proposal becomes active.
### Casting of Votes by Signature

Offline signature votes are enabled through this voting method. More details can be found in the BitDAO Governance Paper.

# Implementation & Architecture

## BIT Contracts

DETAILS?

## Staking

Write in Phase 2?

## BIT Token

A fixed supply of 10,000,000,000 BIT Tokens will be in circulation, with swap tokens within the ecosystem controlled by the DAO.

## Governance

Any address with more than 100,000,000 BIT delegated to it may propose governance actions. When a proposal is created, the community can submit their votes over a three (3)-day voting period. A quorum of 300,000,000 votes is necessary to open a motion. Once a quorum is reached, if a majority of the votes are cast in favor of the proposal, it would then be queued in the timelock to be implemented after two (2) days. The quorum of votes, the implementation delay, and the voting period can be changed through governance. More details can be found in the BitDAO Governance Paper.

# Summary

- BitDAO is a treasury protocol governed by BIT token holders
- BIT token holders to decide on functions of BitDAO and on the deployment of contributed assets in the BIT treasury through smart contract actions
- Governance and transparency of contribution and deployment of contributed assets are done via voting process and non-human intermediated deployment
- Each BIT token accord the BIT token holder equal vote and benefits in respect of the governance of BitDAO

# References

Compound White Paper. [https://compound.finance/documents/Compound.Whitepaper.pdf](https://compound.finance/documents/Compound.Whitepaper.pdf)<br/>
Coingecko. [https://www.coingecko.com/en](https://www.coingecko.com/en)

</template>

<script>
export default {
  layout: 'mdx',
  data () {
    return {
      title: 'Litepaper',
      toc: [{
        text: 'Contents',
        href: 'Contents',
        level: 1
      },
      {
        text: '1. Introduction',
        href: 'Introduction',
        level: 1
      },
      {
        text: '2. The BitDAO Protocol',
        href: 'TheBitDAOProtocol',
        level: 1
      },
      {
        text: '2.1 BIT Token',
        href: 'BITToken2',
        level: 2
      },
      {
        text: '2.11 Primary Use Cases',
        href: 'PrimaryUseCases',
        level: 3
      },
      {
        text: '2.2 Delegation of Votes',
        href: 'DelegationofVotes',
        level: 2
      },
      {
        text: '2.2.1 Delegation by Signature',
        href: 'DelegationbySignature',
        level: 3
      },
      {
        text: '2.3 Proposals',
        href: 'Proposals',
        level: 2
      },
      {
        text: '2.4 Casting of Votes',
        href: 'CastingofVotes',
        level: 2
      },
      {
        text: '2.4.1 Casting of Votes by Signature',
        href: 'CastingofVotesbySignature',
        level: 3
      },
      {
        text: '3. Implementation & Architecture',
        href: 'ImplementationArchitecture',
        level: 1
      },
      {
        text: '3.1 BIT Contracts',
        href: 'BITContracts',
        level: 2
      },
      {
        text: '3.2 Staking',
        href: 'Staking',
        level: 2
      },
      {
        text: '3.3 BIT Token',
        href: 'BITToken3',
        level: 2
      },
      {
        text: '3.4 Governance',
        href: 'Governance',
        level: 2
      }]
    }
  },
  created () {
    this.$store.commit('docs/setTitle', this.title)
    this.$store.commit('docs/setToc', this.toc)
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/mdx.scss'
</style>
