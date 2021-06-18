<template>
  <footer>
    <div class="footer-container">
      <div class="title-desc">
        <h1>BitDAO</h1>
        <p>{{ $t('BitDAODesc') }}</p>
      </div>
      <div class="social">
        <h2>{{ $t('social') }}</h2>
        <div class="link-container">
          <a
            href="https://twitter.com/BitDAO_Official"
            data-buried="'click','footer_social','social_type=twitter'"
            rel="noopener noreferrer"
            target="_blank"
          >
            Twitter
          </a>
          <a
            href="https://discord.gg/jTBC4BKnj7"
            data-buried="'click','footer_social','social_type=discord'"
            rel="noopener noreferrer"
            target="_blank"
          >
            Discord
          </a>
          <a
            href="https://t.me/BitDAO_Official"
            data-buried="'click','footer_social','social_type=telegram'"
            rel="noopener noreferrer"
            target="_blank"
          >
            Telegram
          </a>
          <a
            href="https://github.com/BitDAOProtocol"
            data-buried="'click','footer_social','social_type=github'"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>
          <a
            href="https://medium.com/bitdao"
            data-buried="'click','footer_social','social_type=medium'"
            rel="noopener noreferrer"
            target="_blank"
          >
            Medium
          </a>
        </div>
      </div>
      <div class="social">
        <h2>{{ $t('protocol') }}</h2>
        <div class="link-container">
          <!-- <a
            href="/docs/api"
            data-buried="'click','footer_protocol','protocal_type=about_us'"
            rel="noopener noreferrer"
            target="_blank"
          >{{ $t('About Us') }}</a>
          <a
            href="/docs/api"
            data-buried="'click','footer_protocol','protocal_type=api'"
            rel="noopener noreferrer"
            target="_blank"
          >{{ $t('API Docs') }}</a> -->
          <a
            href="/docs/governance"
            data-buried="'click','footer_protocol','protocal_type=governance'"
            rel="noopener noreferrer"
            target="_blank"
          >
            {{ $t('Governance') }}
          </a>
          <a
            href="/docs/litepaper"
            data-buried="'click','footer_protocol','protocal_type=lite_paper'"
            rel="noopener noreferrer"
            target="_blank"
          >
            {{ $t('Litepaper') }}
          </a>
          <!-- <a
            href="/vote"
            data-buried="'click','footer_protocol','protocal_type=vote'"
            rel="noopener noreferrer"
            target="_blank"
          >{{ $t('vote') }}</a> -->
        </div>
      </div>
      <div class="social">
        <h2>{{ $t('support') }}</h2>
        <div class="link-container">
          <a
            href="/faq"
            data-buried="'click','footer_support','support_type=faq'"
            rel="noopener noreferrer"
            target="_blank"
          >
            {{ $t('FAQ') }}
          </a>
          <!-- <a
            href="/careers"
            data-buried="'click','footer_support','support_type=careers'"
            rel="noopener noreferrer"
            target="_blank"
          >{{ $t('Careers') }}</a> -->
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
footer {
  background: linear-gradient(180deg, #ECF8FF 0%, rgba(255, 255, 255, 0) 100%);
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
