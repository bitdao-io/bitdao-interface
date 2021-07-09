<template>
  <section class="bitflow">
    <h1 class="title" v-html="$t('growth.title')">
    </h1>
    <div class="flow-pc">
      <div class="left">
        <div class="flow-icon">
          <img src="@/assets/image/flow/icon1.svg" alt="">
          <p>{{ $t('PartnerContributions') }}</p>
        </div>
        <div class="flow-icon">
          <img src="@/assets/image/flow/icon2.svg" alt="">
          <p>{{ $t('Partner Token Growth') }}</p>
        </div>
        <div class="flow-icon">
          <img src="@/assets/image/flow/icon3.svg" alt="">
          <p>{{ $t('BitDAO Protocol Contributions') }}</p>
        </div>
      </div>
      <div class="middle">
        <div class="middle-icon">
          <img src="@/assets/image/flow/icon7.svg" alt="">
          <p>{{ $t('BitDAO TREASURY') }}</p>
        </div>
        <div class="middle-link">
          <img src="@/assets/image/flow/link.svg" alt="">
          <div class="bitflow-step bitflow-step2">
            <span class="bitflow-step-num">2</span>
            <span v-html="$t('Proposal and Voting')"></span>
          </div>
        </div>
        <div class="middle-icon">
          <img src="@/assets/image/flow/icon8.svg" alt="">
          <p>{{ $t('BitDAO GOVERNANCE') }}</p>
        </div>
      </div>
      <div class="right">
        <div class="right-top">
          <div class="flow-icon">
            <img src="@/assets/image/flow/icon4.svg" alt="">
            <p>{{ $t('Grants') }}</p>
          </div>
          <div class="flow-icon">
            <img src="@/assets/image/flow/icon5.svg" alt="">
            <p>{{ $t('Token Swaps') }}</p>
          </div>
        </div>
        <div class="flow-icon">
          <img src="@/assets/image/flow/icon6.svg" alt="">
          <p>{{ $t('Protocol Upgrades') }}</p>
          <p class="p-eg">{{ $t('Protocol Upgrades eg') }}</p>
        </div>
      </div>
      <div class="arrow-right1">
        <img src="@/assets/image/flow/arrow-right1.svg" alt="">
        <div class="bitflow-step">
          <span class="bitflow-step-num">1</span>
          <span>{{ $t('Contributions') }}</span>
        </div>
      </div>
      <div class="arrow-right2">
        <img src="@/assets/image/flow/arrow-right2.svg" alt="">
        <div class="bitflow-step">
          <span class="bitflow-step-num">3</span>
          <span>{{ $t('Execution') }}</span>
        </div>
      </div>
      <div class="arrow-left">
        <img src="@/assets/image/flow/arrow-left.svg" alt="">
        <div class="bitflow-step bitflow-step4">
          <span class="bitflow-step-num">4</span>
          <span>{{ $t('Ecosystem Growth', ['']) }}</span>
        </div>
      </div>
    </div>
    <div class="flow-mobile">
      <div class="top">
        <div class="flow-icon">
          <img src="@/assets/image/flow/icon1.svg" alt="">
          <p>{{ $t('PartnerContributions') }}</p>
        </div>
        <div class="flow-icon">
          <img src="@/assets/image/flow/icon2.svg" alt="">
          <p>{{ $t('Partner Token Growth') }}</p>
        </div>
        <div class="flow-icon">
          <img src="@/assets/image/flow/icon3.svg" alt="">
          <p>{{ $t('BitDAO Protocol Contributions') }}</p>
        </div>
      </div>
      <div class="middle">
        <div class="middle-left">
          <div class="mobile-arrow">
            <img src="@/assets/image/flow/mobile/arrow-down1.svg" alt="">
            <div class="bitflow-step">
              <span class="bitflow-step-num">1</span>
              <span>{{ $t('Contributions') }}</span>
            </div>
          </div>
          <div class="middle-icon-container">
            <div class="middle-icon">
              <img src="@/assets/image/flow/icon7.svg" alt="">
              <p>{{ $t('BitDAO TREASURY') }}</p>
            </div>
            <div class="middle-link mobile-arrow">
              <img src="@/assets/image/flow/mobile/link.svg" alt="">
              <div class="bitflow-step bitflow-step2">
                <span class="bitflow-step-num">2</span>
                <span v-html="$t('Proposal and Voting')"></span>
              </div>
            </div>
            <div class="middle-icon">
              <img src="@/assets/image/flow/icon8.svg" alt="">
              <p>{{ $t('BitDAO GOVERNANCE') }}</p>
            </div>
          </div>
          <div class="mobile-arrow">
            <img src="@/assets/image/flow/mobile/arrow-down2.svg" alt="">
            <div class="bitflow-step">
              <span class="bitflow-step-num">3</span>
              <span>{{ $t('Execution') }}</span>
            </div>
          </div>
        </div>
        <div class="middle-right mobile-arrow">
          <img src="@/assets/image/flow/mobile/arrow-up.svg" alt="">
          <div class="bitflow-step bitflow-step4">
            <span v-html="$t('Ecosystem Growth', ['<br>'])"></span>
            <span class="bitflow-step-num">4</span>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="flow-icon">
          <img src="@/assets/image/flow/icon4.svg" alt="">
          <p>{{ $t('Grants') }}</p>
        </div>
        <div class="flow-icon">
          <img src="@/assets/image/flow/icon6.svg" alt="">
          <p>{{ $t('Protocol Upgrades') }}</p>
          <p class="p-eg">{{ $t('Protocol Upgrades eg') }}</p>
        </div>
        <div class="flow-icon">
          <img src="@/assets/image/flow/icon5.svg" alt="">
          <p>{{ $t('Token Swaps') }}</p>
        </div>
      </div>
    </div>
    <p class="flow-subtitle" v-html="$t('growingDesc')"></p>
    <div class="flow-button">
      <a
        href="https://discourse.bitdao.io/"
        class="bit-button"
        data-buried="click,banner_enterforum"
        rel="noopener noreferrer"
        target="_blank"
      >
        <span class="bit-button_text">{{ $t('Enter Forum') }}</span>
      </a>

      <a
        href="https://snapshot.org/#/bitdao.eth"
        class="bit-button bit-button-blue"
        data-buried="click,banner_currentgovernance"
        rel="noopener noreferrer"
        target="_blank"
      >
        <span class="bit-button_text">{{ $t('Governance') }}</span>
      </a>
    </div>
  </section>
</template>

<style scoped lang="scss">
.bitflow {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 20px 10rem;
  // background: linear-gradient(180deg,rgba(247, 238, 246, 0.6), #FFFFFF);
  .title {
    font-size: 3rem;
    margin-bottom: 4rem;
    text-align: center;
    span:first-child {
      color: #F9C3CB;
    }
    span:last-child {
      color: #3CA3D6;
    }
  }
  .flow-pc {
    position: relative;
    height: 640px;
    width: 1100px;
    .left, .right {
      background: linear-gradient(180deg, #3CA3D6 0%, #6288F7 100%);
      border-radius: 16px;
      padding: 40px 20px;
    }
    .left {
      position: absolute;
      left: 0;
      width: 200px;
      height: 640px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }
    .middle {
      position: absolute;
      left: 430px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .middle-icon {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        border-radius: 50%;
        height: 154px;
        width: 154px;
        border: 4px solid #3CA3D6;
        p {
          width: 80%;
          font-size: 14px;
          font-weight: 700;
          margin-top: 5px;
        }
      }
      .middle-link {
        text-align: center;
        margin: 40px 0;
      }
    }
    .right {
      position: absolute;
      left: 800px;
      width: 300px;
      height: 350px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .right-top {
        display: flex;
        align-items: center;
        justify-content: space-around;
      }
    }
    .arrow-right1 {
      position: absolute;
      left: 215px;
      top: 43px;
      img {
        height: 56px;
      }
    }
    .arrow-right2 {
      position: absolute;
      left: 595px;
      top: 43px;
      img {
        height: 56px;
      }
    }
    .arrow-left {
      position: absolute;
      bottom: 30px;
      left: 220px;
      img {
        height:235px;
      }
    }
    .bitflow-step {
      position: absolute;
      left: 30%;
      top: 50%;
      transform: translate(-30%, -50%);
      color: #3CA3D6;
      font-weight: 700;
      font-size: 16px;
      white-space:nowrap;
      .bitflow-step-num {
        display: inline-block;
        text-align: center;
        line-height: 30px;
        height: 30px;
        width: 30px;
        border-radius: 50%;
        background-color: #fff;
        margin-right: 1rem;
      }
    }
    .bitflow-step4 {
      left: 50%;
      top: 86%;
      transform: translate(-50%, -50%);
    }
    .bitflow-step2 {
      left: 100%;
      text-align: center;
      flex-direction: column;
      display: flex;
      align-items: center;
      .bitflow-step-num {
        margin-right: 0;
        margin-bottom: 1rem;
      }
    }
  }
  .flow-icon {
    color: #fff;
    text-align: center;
    img {
      margin-bottom: 10px;
      height: 50px;
    }
    p {
      font-size: 16px;
      line-height: 20px;
    }
    .p-eg {
      margin-top: 10px;
    }
  }
  .flow-mobile {
    display: none;
    .mobile-arrow {
      position: relative;
    }
    .bitflow-step {
      position: absolute;
      left: 3px;
      top: 50%;
      transform: translate(0, -50%);
      color: #3CA3D6;
      font-weight: 700;
      font-size: 16px;
      white-space:nowrap;
      .bitflow-step-num {
        display: inline-block;
        text-align: center;
        line-height: 30px;
        height: 30px;
        width: 30px;
        border-radius: 50%;
        background-color: #fff;
        margin-right: 1rem;
      }
    }
    .bitflow-step2 {
      text-align: center;
      flex-direction: column;
      display: flex;
      align-items: center;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      .bitflow-step-num {
        margin-right: 0;
        margin-bottom: 2.5rem;
      }
    }
    .bitflow-step4 {
      left: 100%;
      top: 80%;
      transform: translate(-100%, 0%);
      text-align: center;
      flex-direction: row;
      display: flex;
      align-items: center;
      justify-content: center;
      .bitflow-step-num {
        margin-right: 0;
        margin-left: 1rem;
      }
    }
    .top, .bottom {
      background: linear-gradient(180deg, #3CA3D6 0%, #6288F7 100%);
      border-radius: 30px;
      padding: 40px 20px;
      display: flex;
    }
    .flow-icon {
      width: 33%;
      img {
        width: 33%;
      }
    }
    .middle {
      display: flex;
      justify-content: space-between;
      align-items: stretch;
      margin: 10px 50px;
      .middle-left {
        .middle-icon-container {
          display: flex;
          align-items: center;
          padding: 20px;
          margin-left: -60px;
        }
        .middle-icon {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          border-radius: 50%;
          height: 120px;
          width: 120px;
          border: 4px solid #3CA3D6;
          img {
            width: 40%;
          }
          p {
            width: 80%;
            font-size: 14px;
            font-weight: 700;
          }
        }
        .middle-link {
          text-align: center;
          margin: 40px 0;
          img {
            width: 80px;
          }
        }
      }
      .middle-right {
        img {
          height: 100%;
        }
      }
    }
  }
  .flow-subtitle {
    margin: 4rem 0;
    font-size: 1.2rem;
    line-height: 1.5rem;
    text-align: center;
  }
  .flow-button {
    display: flex;
    align-items: center;
    a:last-child {
      margin: 0 0 0 20px;
    }
  }
}
@media screen and (max-width: 1100px){
  .bitflow {
    .flow-pc {
      display: none;
    }
    .flow-mobile {
      display: block;
    }
  }
}
@media screen and (max-width: 800px){
  .bitflow h1.title {
      font-size: 2rem;
  }
}

@media screen and (max-width: 550px){
  .bitflow {
    .title {
      text-align: center;
      margin-bottom: 3rem;
      span:last-child {
        display: block;
      }
    }
    .flow-mobile {
      .bitflow-step {
        font-size: 14px;
      }
      .top, .bottom {
        padding: 20px 10px;
      }
      .middle {
        margin: 10px 30px;
        .middle-left {
          .middle-icon-container {
            margin-left: -60px;
          }
          .middle-icon {
            height: 25vw;
            width: 25vw;
            p {
              text-align: center;
              transform: scale(0.8);
              font-size: 3vw;
            }
          }
          .middle-link {
            text-align: center;
            margin: 10vw 0;
            img {
              width: 15vw;
            }
          }
        }
      }
    }
    .flow-button {
      display: flex;
      flex-direction: column;
      a:last-child {
        margin: 20px 0 0 0;
      }
    }
  }
}
</style>
