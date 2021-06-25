<template>
  <section class="partner">
    <h1>{{ $t('partners') }}</h1>
    <div class="partner-logos">
      <img src="@/assets/image/partner/peter.svg" alt="">
      <img src="@/assets/image/partner/founders.svg" alt="">
      <img src="@/assets/image/partner/pantera.svg" alt="">
      <img src="@/assets/image/partner/dragonfly.svg" alt="">
      <img src="@/assets/image/partner/bybit.svg" alt="">
      <img src="@/assets/image/partner/alan.svg" alt="">
      <img src="@/assets/image/partner/kain.svg" alt="">
      <img src="@/assets/image/partner/fenbushi.svg" alt="">
      <img src="@/assets/image/partner/jump.svg" alt="">
      <img src="@/assets/image/partner/peak.svg" alt="">
      <img src="@/assets/image/partner/cambium.svg" alt="">
      <img src="@/assets/image/partner/tembusu.svg" alt="">
      <img src="@/assets/image/partner/longhash.svg" alt="">
      <img src="@/assets/image/partner/iangels.svg" alt="">
      <img src="@/assets/image/partner/alphanonce.svg" alt="">
      <img src="@/assets/image/partner/coinhako.svg" alt="">
      <img src="@/assets/image/partner/mgnr.svg" alt="">
      <img src="@/assets/image/partner/uva.svg" alt="">
      <img src="@/assets/image/partner/la.svg" alt="">
      <img src="@/assets/image/partner/amber.svg" alt="">
      <img src="@/assets/image/partner/sushi.svg" alt="">
      <img src="@/assets/image/partner/pantera.svg" alt="">
      <img src="@/assets/image/partner/spartan.svg" alt="">
      <img src="@/assets/image/partner/preangel.svg" alt="">
      <img src="@/assets/image/partner/fin.svg" alt="">
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
  h1 {
    font-size: 32px;
    font-weight: 700;
    color: #0E47EF;
    margin-bottom: 45px;
  }
  .partner-logos {
    width: 1000px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    img {
      height: 80px;
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
</style>
