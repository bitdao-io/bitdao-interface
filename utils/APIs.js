
let prefix = '/api'
if (typeof window !== 'undefined' && window.location.hostname === 'www.public-test-1.bitdao.io') {
  prefix = '/api-test'
}

export default {
  balance: `${prefix}/service/balance`,
  chart: `${prefix}/service/chart`,
  injectHistory: `${prefix}/service/inject-history`,
  pledgeSum: `${prefix}/service/pledge-sum`
}
