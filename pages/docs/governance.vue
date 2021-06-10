<template lang="md">

# Overview
# Code

[[Governance Github link]](https://github.com/BitDAO/governance)
# Deployed Contracts

# Process
[[refer to https://uniswap.org/docs/v2/governance/process/]](https://uniswap.org/docs/v2/governance/process/)

# Glossary
BIT: An ERC-20 token that designates the weight of a user’s voting rights. The more BIT a user has in their wallet, the
more weight their delegation or vote on a proposal holds.

Delegation: BIT holders cannot vote or create proposals until they delegate their voting rights to an address.
Delegation can be given to one address at a time, including the holder’s own address. Note that delegation does not
lock tokens; it simply adds votes to the chosen delegation address.

Proposal: A proposal is executable code that modifies the governance contract or treasury and how they work. In
order to create a proposal, a user must have at least 1% of all BIT delegated to their address. Proposals are stored in
the ”proposals” mapping of the Governor smart contract. All proposals are subject to a 7-day voting period. If the
proposer does not maintain their vote weight balance throughout the voting period, the proposal may be canceled
by anyone.

Quorum: In order for a vote to pass, it must achieve quorum of 3% of all BIT voting in the affirmative. The purpose of
the quorum is to ensure that the only measures that pass have adequate voter participation.

Voting: Users can vote for or against single proposals once they have voting rights delegated to their address. Votes
can be cast while a proposal is in the ”Active” state. Votes can be submitted immediately using ”castVote” or
submitted later with ”castVoteBySig” (For more info on castVoteBySig and offline signatures, see EIP-712). If the
majority of votes (and a 3% quorum of BIT) vote for a proposal, the proposal may be queued in the Timelock.

Voting Period: Once a proposal has been put forward, BitDAO community members will have a seven day period (the
Voting Period) to cast their votes.

Timelock: All governance and other administrative actions are required to sit in the Timelock for a minimum of 2 days,
after which they can be implemented.

# Governance Reference

The BitDAO is governed and upgraded by BIT token-holders, using three distinct components; the BIT token,
governance module (a fork of Compound Governor Bravo), and Timelock. Together, these contracts allow the
community to propose, vote, and implement changes to the BitDAO protocol.
Any address with more than 100,000,000 BIT delegated to it may propose governance actions, which are executable
code. When a proposal is created, the community can submit their votes during a 3 day voting period. If a majority,
and at least 300,000,000 votes are cast for the proposal, it is queued in the Timelock, and can be implemented after
2 days. The proposal minimum delegate amount, the voting delay, and voting period can be changed through
governance.

![](@/assets/image/governance-flow.svg)

# BIT
BIT is an ERC-20 token that allows the owner to delegate voting rights to any address, including their own address.
Changes to the owner’s token balance automatically adjust the voting rights of the delegate.

# Delegate
Delegate votes from the sender to the delegatee. Users can delegate to 1 address at a time, and the number of
votes added to the delegatee’s vote count is equivalent to the balance of BIT in the user’s account. Votes are
delegated from the current block and onward, until the sender delegates again, or transfers their BIT .

<p><Color1>function</Color1> <Color2>delegate</Color2>  (address delegatee)</p>

- delegatee: The address in which the sender wishes to delegate their votes to.
- msg.sender: The address of the BIT token holder that is attempting to delegate their votes.
- RETURN: No return, reverts on error.

# Delegate By Signature

Delegate votes from the signatory to the delegatee. This method has the same purpose as Delegate but it instead
enables offline signatures to participate in Compound governance vote delegation. For more details on how to
create an offline signature.

<p><Color1>function</Color1> <Color2>delegateBySig</Color2> (address delegatee, uint nonce, uint expiry, uint8 v, bytes32 r, bytes32 s)</p>

- delegatee: The address in which the sender wishes to delegate their votes to.
- nonce: The contract state required to match the signature. This can be retrieved from the contract’s public nonces mapping.
- expiry: The time at which to expire the signature. A block timestamp as seconds since the unix epoch (uint).
- v: The recovery byte of the signature.
- r: Half of the ECDSA signature pair.
- s: Half of the ECDSA signature pair.
- RETURN: No return, reverts on error.

# Get Current Votes
Gets the balance of votes for an account as of the current block.

<p><Color1>function</Color1> <Color2>getCurrentVotes</Color2> (address account) returns (uint96)</p>

- account: Address of the account in which to retrieve the number of votes.
- RETURN: The number of votes (integer).

# Get Prior Votes
Gets the prior number of votes for an account at a specific block number. The block number passed must be a
finalized block or the function will revert.

<p><Color1>function</Color1> <Color2>getPriorVotes</Color2> (address account, uint blockNumber) returns (uint96)</p>

- account: Address of the account in which to retrieve the prior number of votes.
- blockNumber: The block number at which to retrieve the prior number of votes.
- RETURN: The number of prior votes.

# Key Events

<KeyEventsTable />

# Governor Bravo

# Quorum Votes

The required minimum number of votes in support of a proposal for it to succeed.

<p><Color1>function</Color1> <Color2>quorumVotes</Color2> ( ) <Color1>public</Color1> pure <Color2>returns</Color2> (<Color1>uint</Color1>)</p>

- RETURN: The minimum number of votes required for a proposal to succeed.

# Proposal Threshold

The minimum number of votes required for an account to create a proposal. This can be changed through
governance.

<p><Color1>function</Color1> <Color2>proposalThreshold</Color2> ( ) <Color2>returns</Color2> (<Color1>uint</Color1>)</p>

- RETURN: The minimum number of votes required for an account to create a proposal.

# Proposal Max Operations

The maximum number of actions that can be included in a proposal. Actions are functions calls that will be made
when a proposal succeeds and executes.

<p><Color1>function</Color1> <Color2>proposalMaxOperations</Color2> ( ) <Color2>returns</Color2> (<Color1>uint</Color1>)</p>

- RETURN: The maximum number of actions that can be included in a proposal.

# Voting Delay

The number of Ethereum blocks to wait before voting on a proposal may begin. This value is added to the current
block number when a proposal is created. This can be changed through governance.

<p><Color1>function</Color1> <Color2>votingDelay</Color2> ( ) <Color2>returns</Color2> (<Color1>uint</Color1>)</p>

- RETURN: Number of blocks to wait before voting on a proposal may begin.

# Voting Period

The duration of voting on a proposal, in Ethereum blocks. This can be changed through governance

<p><Color1>function</Color1> <Color2>votingPeriod</Color2> ( ) <Color2>returns</Color2> (<Color1>uint</Color1>)</p>

- RETURN: The duration of voting on a proposal, in Ethereum blocks.

# Propose

Proposals will be voted on by delegated voters. If there is sufficient support before the voting period ends, the
proposal shall be automatically enacted. Enacted proposals are queued and executed in the BitDAO Timelock
contract.

The sender must hold more BIT than the current proposal threshold (proposalThreshold ( )) as of the immediately
previous block. If the threshold is 100,000 COMP, the sender must have been delegated more than 1% of all BIT in
order to create a proposal. The proposal can have up to 10 actions (based on proposalMaxOperations ( )).

The proposer cannot create another proposal if they currently have a pending or active proposal. It is not possible
to queue two identical actions in the same block (due to a restriction in the Timelock), therefore actions in a single
proposal must be unique, and unique proposals that share an identical action must be queued in different blocks

<p><Color1>function</Color1> <Color2>propose</Color2> (address [ ] memory targets, uint [ ] memory values, string [ ] memory signatures, bytes [ ] memory calldatas, string memory description) <Color2>returns</Color2> (<Color1>uint</Color1>)</p>

- targets: The ordered list of target addresses for calls to be made during proposal execution. This array must be the same length as all other array parameters in this function.
- values: The ordered list of values (i.e. msg.value) to be passed to the calls made during proposal execution. This array must be the same length as all other array parameters in this function.
- signatures: The ordered list of function signatures to be passed during execution. This array must be the same length as all other array parameters in this function.
- calldatas: The ordered list of data to be passed to each individual function call during proposal execution. This array must be the same length as all other array parameters in this function.
- description: A human readable description of the proposal and the changes it will enact.
- RETURN: The ID of the newly created proposal.

# Queue

After a proposal has succeeded, any address can call the queue method to move the proposal into the Timelock queue. A proposal can only be queued if it has succeeded.

<p><Color1>function</Color1> <Color2>queue</Color2> (uint proposalId)</p>

- proposalId: ID of a proposal that has succeeded.
- RETURN: No return, reverts on error.

# Execute

After the Timelock delay period, any account may invoke the execute method to apply the changes from the
proposal to the target contracts. This will invoke each of the actions described in the proposal. This function is payable so the Timelock contract can invoke payable functions that were selected in the proposal.

<p><Color1>function</Color1> <Color2>execute</Color2> (uint proposalId)</p>

- proposalId: ID of a succeeded proposal to execute.
- RETURN: No return, reverts on error.

# Cancel

Cancel a proposal that has not yet been executed. The Guardian is the only one who may execute this unless the proposer does not maintain the delegates required to create a proposal. If the proposer does not have more delegates than the proposal threshold, anyone can cancel the proposal.

<p><Color1>function</Color1> <Color2>cancel</Color2> (uint proposalId)</p>

- proposalId: ID of a proposal to cancel. The proposal cannot have already been executed.
- RETURN: No return, reverts on error.

# Get Actions

Gets the actions of a selected proposal. Pass a proposal ID and get the targets, values, signatures and calldatas of that proposal.

<p><Color1>function</Color1> <Color2>getActions</Color2> (uint proposalId) <Color2>returns</Color2> (<Color1>uint</Color1> proposalId) <Color1>public</Color1> view <Color2>returns</Color2> (<Color1>address</Color1> [ ] <Color1>memory</Color1> targets, <Color1>uint</Color1> [ ] <Color1>memory</Color1> values, string [ ] <Color1>memory</Color1> signatures, bytes [ ] <Color1>memory</Color1> calldatas)</p>

- proposalId: ID of a proposal in which to get its actions.
- RETURN: Reverts if the proposal ID is invalid. If successful, the following 4 references are returned.

1. Array of addresses of contracts the proposal calls.
2. Array of unsigned integers the proposal uses as values.
3. Array of strings of the proposal’s signatures.
4. Array of calldata bytes of the proposal.

# Get Receipt

Gets a proposal ballot receipt of the indicated voter.

<p><Color1>function</Color1> <Color2>getReceipt</Color2> (uint proposalId, address voter) <Color2>returns</Color2> (Receipt <Color1>memory</Color1>)</p>

- proposalId: ID of the proposal in which to get a voter’s ballot receipt.
- voter: Address of the account of a proposal voter.
- RETURN: Reverts on error. If successful, returns a Receipt struct for the ballot of the voter address.

# State

Gets the proposal state for the specified proposal. The return value, ProposalState is an enumerated type defined in the Governor Bravo contract.

<p><Color1>function</Color1> <Color2>state</Color2> (uint proposalId) returns (ProposalState)</p>

- proposalId: ID of a proposal in which to get its state.
- RETURN: Enumerated type ProposalState. The types are Pending, Active, Canceled, Defeated, Succeeded, Queued, Expired, andExecuted.

# Cast Vote

Cast a vote on a proposal. The account's voting weight is determined by the number of votes the account had delegated to it at the time the proposal state became active.

<p><Color1>function</Color1> <Color2>castVote</Color2> (uint proposalId, uint8 support)</p>

- proposalId: ID of a proposal in which to cast a vote.
- support: An integer of 0 for against, 1 for in-favor, and 2 for abstain.
- RETURN: No return, reverts on error.

# Cast Vote

Cast a vote on a proposal with a reason attached to the vote.

<p><Color1>function</Color1> <Color2>castVoteWithReason</Color2> (uint proposalId, uint8 support, string calldata reason)</p>

- proposalId: ID of a proposal in which to cast a vote.
- support: An integer of 0 for against, 1 for in-favor, and 2 for abstain.
- reason: A string containing the voter's reason for their vote selection.
- RETURN: No return, reverts on error.

# Cast Vote By Signature

Cast a vote on a proposal. The account's voting weight is determined by the number of votes the account had delegated at the time that proposal state became active. This method has the same purpose as Cast Vote but it instead enables offline signatures to participate in BitDAO governance voting. For more details on how to create an offline signature, review EIP-712.

<p><Color1>function</Color1> <Color2>castVoteBySig</Color2> (uint proposalId, uint8 support, uint8 v, bytes32 r, bytes32 s)</p>

- proposalId: ID of a proposal in which to cast a vote.
- support: An integer of 0 for against, 1 for in-favor, and 2 for abstain.
- v: The recovery byte of the signature.
- r: Half of the ECDSA signature pair.
- s: Half of the ECDSA signature pair.
- RETURN: No return, reverts on error.

# Timelock

The Timelock contract can modify system parameters, logic, and contracts in a 'time-delayed, opt-out' upgrade pattern.

The Timelock has a hard-coded minimum delay of 2 days, which is the least amount of notice possible for a governance action. Each proposed action will be published at a minimum of 2 days in the future from the time of announcement. Major upgrades, such as changing the risk system, may have a 14 day delay.

# Pause Guardian
</template>

<script>
import Color1 from '@/components/mdx/Color1.vue'
import Color2 from '@/components/mdx/Color2.vue'
import KeyEventsTable from '@/components/mdx/KeyEventsTable.vue'
export default {
  components: {
    Color1,
    Color2,
    KeyEventsTable
  },
  layout: 'mdx',
  data () {
    return {
      title: 'Governance',
      toc: [
        {
          text: 'Overview',
          href: 'Overview',
          level: 1
        },
        {
          text: 'Code',
          href: 'Code',
          level: 1
        },
        {
          text: 'Deployed Contracts',
          href: 'DeployedContracts',
          level: 1
        },
        {
          text: 'Process',
          href: 'Process',
          level: 1
        },
        {
          text: 'Glossary',
          href: 'Glossary',
          level: 1
        },
        {
          text: 'Governance Reference',
          href: 'GovernanceReference',
          level: 1
        },
        {
          text: 'BIT',
          href: 'BIT',
          level: 1
        },
        {
          text: 'Delegate',
          href: 'Delegate',
          level: 1
        },
        {
          text: 'Delegate By Signature ',
          href: 'DelegateBySignature',
          level: 1
        },
        {
          text: 'Get Current Votes',
          href: 'GetCurrentVotes',
          level: 1
        },
        {
          text: 'Get Prior Votes ',
          href: 'GetPriorVotes',
          level: 1
        },
        {
          text: 'Key Events',
          href: 'KeyEvents',
          level: 1
        },
        {
          text: 'Governor Bravo',
          href: 'GovernorBravo',
          level: 1
        },
        {
          text: 'Quorum Votes',
          href: 'QuorumVotes',
          level: 1
        },
        {
          text: 'Proposal Threshold ',
          href: 'ProposalThreshold',
          level: 1
        },
        {
          text: 'Proposal Max Operations ',
          href: 'ProposalMaxOperations',
          level: 1
        },
        {
          text: 'Voting Delay',
          href: 'VotingDelay',
          level: 1
        },
        {
          text: 'Voting Period',
          href: 'VotingPeriod',
          level: 1
        },
        {
          text: 'Propose',
          href: 'Propose',
          level: 1
        },
        {
          text: 'Queue',
          href: 'Queue',
          level: 1
        },
        {
          text: 'Execute',
          href: 'Execute',
          level: 1
        },
        {
          text: 'Cancel',
          href: 'Cancel',
          level: 1
        },
        {
          text: 'Get Actions',
          href: 'GetActions',
          level: 1
        },
        {
          text: 'Get Receipt',
          href: 'GetReceipt',
          level: 1
        },
        {
          text: 'State',
          href: 'State',
          level: 1
        },
        {
          text: 'Cast Vote',
          href: 'CastVote',
          level: 1
        },
        {
          text: 'Cast Vote With Reason',
          href: 'CastVoteWithReason',
          level: 1
        },
        {
          text: 'Cast Vote By Signature',
          href: 'CastVoteBySignature',
          level: 1
        },
        {
          text: 'Timelock',
          href: 'Timelock',
          level: 1
        },
        {
          text: 'Pause Guardian',
          href: 'PauseGuardian',
          level: 1
        }
      ]
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
