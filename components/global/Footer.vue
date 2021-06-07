<template>
  <footer>
    <div class="footer-container">
      <div class="title-desc">
        <h1>BitDAO</h1>
        <p>BitDAO is an on-chain protocol governed by BIT token holders</p>
      </div>
      <div class="social">
        <h2>SOCIAL</h2>
        <div class="link-container">
          <a
            href="https://twitter.com/BitDAO_Official"
            data-buried="'click','footer','twitter'"
            rel="noopener noreferrer"
            target="_blank"
          >
            Twitter
          </a>
          <a
            href="https://discord.gg/ybNZCKPA"
            data-buried="'click','footer','discord'"
            rel="noopener noreferrer"
            target="_blank"
          >
            Discord
          </a>
          <a
            href="https://t.me/BitDAO_Official"
            data-buried="'click','footer','telegram'"
            rel="noopener noreferrer"
            target="_blank"
          >
            Telegram
          </a>
          <a
            href="https://github.com/BitDAOProtocol"
            data-buried="'click','footer','github'"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>
          <a
            href="https://medium.com/bitdao"
            data-buried="'click','footer','medium'"
            rel="noopener noreferrer"
            target="_blank"
          >
            Medium
          </a>
        </div>
      </div>
      <div class="social">
        <h2>PROTOTCOL</h2>
        <div class="link-container">
          <a>About Us</a>
          <a>API Docs</a>
          <a
            href="/docs/governance"
            data-buried="'click','footer','governance'"
            rel="noopener noreferrer"
            target="_blank"
          >
            Governance
          </a>
          <a
            href="/docs/litepaper"
            data-buried="'click','footer','litepaper'"
            rel="noopener noreferrer"
            target="_blank"
          >
            Lite Paper
          </a>
          <a>Vote</a>
        </div>
      </div>
      <div class="social">
        <h2>SUPPORT</h2>
        <div class="link-container">
          <a
            href="/faq"
            data-buried="'click','footer','faq'"
            rel="noopener noreferrer"
            target="_blank"
          >
            FAQ
          </a>
          <a>Careers</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
footer {
  background: #fff;
  color: #2D82B7;
  margin: auto;
  .footer-container{
    width: 1000px;
    padding: 100px 0 200px;
    margin: auto;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    a {
      color: #2D82B7;
    }
    h2 {
      font-size: 18px;
      font-weight: 700;
      line-height: 22px;
    }
    .title-desc {
      width: 280px;
      h1 {
        font-size: 42px;
        font-weight: 700;
        margin-bottom: 20px;
      }
      p {
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
      }
    }
    .link-container {
      display: flex;
      flex-direction: column;
      a {
        margin-top: 20px;
        font-size: 14px;
        font-weight: 400;
      }
    }
  }
}
</style>
