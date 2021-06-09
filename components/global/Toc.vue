<template>
  <ul>
    <li v-for="item of tocs" :key="item.href">
      <a :href="item.href">{{ item.text }}</a>
    </li>
  </ul>
</template>
<script>
export default {
  data () {
    return {
      tocs: [{
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
  }
}
</script>

<style scoped lang="scss">
ul {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  position: -webkit-sticky;
  position: sticky;
  align-self: flex-start;
  top: 6rem;
  min-width: 180px;
  max-height: 70vh;
  overflow: auto;
  font-size: 0.75rem;
  margin: 0 2rem 0 0;
  opacity: 0.6;
  transition: opacity 0.3s ease;
  list-style: none;
  text-decoration: none;
  border-left: 1px solid #F7F8FA;

  &:hover {
    opacity: 1;
  }
  li {
    padding: 0;
  }
}
li {
  margin-bottom: 0px;
  margin-top: 0.125rem;
  margin-bottom: 0.5em;
  a {
      text-decoration: none;
      color: #0E47EF;
      white-space: pre;
      text-overflow: ellipsis;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
  }
}
</style>
