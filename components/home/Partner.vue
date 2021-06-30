<template>
  <section class="partner">
    <h1>{{ $t('partners') }}</h1>
    <div class="partner-logos">
      <div class="partner-item"><img src="@/assets/image/partner/peter.svg" alt=""></div>
      <div class="partner-item"><img src="@/assets/image/partner/founders.svg" alt=""></div>
      <div class="partner-item"><img src="@/assets/image/partner/pantera.svg" alt=""></div>
      <div class="partner-item"><img src="@/assets/image/partner/dragonfly.svg" alt=""></div>
      <div class="partner-item"><img src="@/assets/image/partner/alan.svg" alt=""></div>
      <div class="partner-item"><img src="@/assets/image/partner/bybit.svg" alt=""></div>
      <div class="partner-item"><img src="@/assets/image/partner/spartan.svg" alt=""></div>
      <div class="partner-item"><img src="@/assets/image/partner/sushi.svg" alt=""></div>
      <div class="partner-item"><img src="@/assets/image/partner/kain.svg" alt=""></div>
      <div class="partner-item"><img src="@/assets/image/partner/jump.svg" alt=""></div>
      <div class="partner-item"><img src="@/assets/image/partner/peak.svg" alt=""></div>
      <div class="partner-item"><img src="@/assets/image/partner/amber.svg" alt=""></div>
      <div class="partner-item"><img src="@/assets/image/partner/cambium.svg" alt=""></div>
      <div class="partner-item"><img src="@/assets/image/partner/coinhako.svg" alt=""></div>
      <div class="partner-item"><img src="@/assets/image/partner/fenbushi.svg" alt=""></div>
      <div class="partner-item"><img src="@/assets/image/partner/tembusu.svg" alt=""></div>
      <div class="partner-item"><img src="@/assets/image/partner/ngc.svg" alt=""></div>
      <div class="partner-item"><img src="@/assets/image/partner/longhash.svg" alt=""></div>
      <div class="partner-item"><img src="@/assets/image/partner/alphanonce.svg" alt=""></div>
      <div class="partner-item"><img src="@/assets/image/partner/iangels.svg" alt=""></div>
      <div class="partner-item"><img src="@/assets/image/partner/uva.svg" alt=""></div>
      <div class="partner-item"><img src="@/assets/image/partner/mgnr.svg" alt=""></div>
      <div class="partner-item"><img src="@/assets/image/partner/la.svg" alt=""></div>
      <div class="partner-item"><img src="@/assets/image/partner/preangel.svg" alt=""></div>
      <div class="partner-item"><img src="@/assets/image/partner/fin.svg" alt=""></div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.partner {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;
  margin-bottom: 5rem;
  h1 {
    font-size: 2rem;
    font-weight: 700;
    color: #0E47EF;
    margin-bottom: 45px;
  }
  .partner-logos {
    max-width: 1280px;
    font-size: 0;
    .partner-item {
      box-sizing: border-box;
      display: inline-block;
      position: relative;
      width: 20%;
      margin: 0;
      padding-right: 0;
      padding-left: 0;
      border-bottom-width: 0;
      text-align: center;
      img {
        height: 80px;
      }
    }
  }
  table {
    width: 600px;
    tbody {
      tr {
        td {
          vertical-align: middle;
          text-align: center;
          height: 80px;
          img {
            height: 100%;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1000px){
  .partner {
    .partner-logos .partner-item {
      width: 33.33%;
    }
  }
}
@media screen and (max-width: 700px){
  .partner {
    .partner-logos .partner-item {
      width: 50%;
      img {
        width: 100%;
      }
    }
  }
}
</style>
