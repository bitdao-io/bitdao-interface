<template>
  <footer>
    <div class="footer-container">
      <div class="title-desc">
        <!-- <div class="logo-bitdao"> -->
        <img class="footer-logo" src="@/assets/image/BitDAO.png" alt="LOGO">
        <!-- <h1>BitDAO</h1> -->
        <!-- </div> -->
        <p :class="{'noWrap': $i18n.locale === 'jp' }">{{ $t('BitDAODesc') }}</p>
      </div>
      <div class="social">
        <h2>{{ $t('social') }}</h2>
        <div class="link-container">
          <a
            :href="$t('socialUrl.Twitter')"
            data-buried="click,footer_social,social_type=twitter"
            rel="noopener noreferrer"
            target="_blank"
          >
            Twitter
          </a>
          <a
            :href="$t('socialUrl.Discord')"
            data-buried="click,footer_social,social_type=discord"
            rel="noopener noreferrer"
            target="_blank"
          >
            Discord
          </a>
          <a
            :href="$t('socialUrl.Telegram')"
            data-buried="click,footer_social,social_type=telegram"
            rel="noopener noreferrer"
            target="_blank"
          >
            Telegram
          </a>
          <a
            :href="$t('socialUrl.GitHub')"
            data-buried="click,footer_social,social_type=github"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>
          <a
            :href="$t('socialUrl.Medium')"
            data-buried="click,footer_social,social_type=medium"
            rel="noopener noreferrer"
            target="_blank"
          >
            Medium
          </a>
          <a
            v-if="$i18n.locale === 'jp'"
            href="https://lin.ee/thzgfUv"
            data-buried="click,footer_social,social_type=line"
            rel="noopener noreferrer"
            target="_blank"
          >
            LINE
          </a>
        </div>
      </div>
      <div class="social">
        <h2>{{ $t('Governance') }}</h2>
        <div class="link-container">
          <!-- <a
            href="/docs/api"
            data-buried="click,footer_governance,governance_type=about_us"
            rel="noopener noreferrer"
            target="_blank"
          >{{ $t('About Us') }}</a>
          <a
            href="/docs/api"
            data-buried="click,footer_governance,governance_type=api"
            rel="noopener noreferrer"
            target="_blank"
          >{{ $t('API Docs') }}</a> -->
          <a
            href="https://discourse.bitdao.io/"
            data-buried="click,footer_governance,governance_type=forum"
            rel="noopener noreferrer"
            target="_blank"
          >
            {{ $t('Forum') }}
          </a>
          <!-- <a
            class="isDisabled"
            href=""
            data-buried="click,footer_governance,governance_type=delegate"
            rel="noopener noreferrer"
          >
            Delegate
          </a> -->
          <a
            href="https://snapshot.org/#/bitdao.eth"
            data-buried="click,footer_governance,governance_type=vote"
            rel="noopener noreferrer"
            target="_blank"
          >{{ $t('vote') }}</a>
        </div>
      </div>
      <div class="social">
        <h2>{{ $t('Documents') }}</h2>
        <div class="link-container">
          <a
            href="https://docs.bitdao.io/litepaper-1/option-2-governance-phase-1"
            data-buried="click,footer_documents,document_type=lite_paper"
            rel="noopener noreferrer"
            target="_blank"
          >
            {{ $t('Litepaper') }}
          </a>
          <a
            href="https://docs.bitdao.io/additional-documents/faq"
            data-buried="click,footer_documents,document_type=faq"
            rel="noopener noreferrer"
            target="_blank"
          >
            {{ $t('FAQ') }}
          </a>
          <!-- <a
            href="/careers"
            data-buried="click,footer_support,support_type=careers"
            rel="noopener noreferrer"
            target="_blank"
          >{{ $t('Careers') }}</a> -->
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.noWrap {
  white-space: nowrap;
}
footer {
  background: linear-gradient(180deg, #ECF8FF 0%, rgba(255, 255, 255, 0) 100%);
  color: #2D82B7;
  margin: auto;
  .footer-logo {
    height: 80px;
    margin-left: -15px;
  }
  .footer-container{
    max-width: 1000px;
    box-sizing: border-box;
    padding: 5rem 0;
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
    .social {
      margin-top: 2rem;
      margin-right: 2rem;
      h2 {
        text-transform: uppercase;
      }
    }
    .title-desc {
      width: 280px;
      margin-top: 2rem;
      margin-right: 2rem;
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

@media screen and (max-width: 1000px){
  footer {
    .footer-container {
      padding: 2rem;
      flex-wrap: wrap;
    }
  }
}
</style>

<style lang="less">
.logo-bitdao {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  img {
  }
  h1 {
    margin: 0!important;
    padding: 0!important;
  }
}
header a:hover {
  .logo-bitdao {
    h1 {
      color: #000;
    }
  }
}
</style>
