<template>
  <div class="a-dropdown" :data-current-index="current">
    <div class="a-dropdown__showbox">
      <div class="a-dropdown__text" @click="switchState">
        <svg-icon :icon-class="`lang-${lang[current].key}`" class="lang-icon" />
        <span>{{ lang[current].value }}</span>
        <svg-icon icon-class="arrow-down" />
      </div>
    </div>
    <transition name="drop-fade">
      <div v-if="is_open" class="a-dropdown__selector">
        <div
          v-for="(item, index) in lang"
          :key="item.key"
          class="a-dropdown__item"
          :data-option-index="index"
          @click="selectOption"
        >
          <svg-icon :icon-class="`lang-${item.key}`" class="lang-icon" />
          {{ item.value }}
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      current: 0,
      is_open: false,
      lang: [
        {
          key: 'EN',
          value: 'EN'
        },
        {
          key: 'JP',
          value: 'JP'
        },
        {
          key: 'KR',
          value: 'KR'
        },
        {
          key: 'RU',
          value: 'RU'
        },
        {
          key: 'ES',
          value: 'ES'
        }
      ],
      arr_data: ['蘋果', '橘子', '香蕉', '榴槤大好']
    }
  },
  methods: {
    switchState () {
      this.is_open = !this.is_open
    },
    selectOption (e) {
      this.current = e.target.getAttribute('data-option-index')
      this.is_open = false
    }
  }
}
</script>

<style lang="scss">
.lang-icon {
  font-size: 2rem;
  margin-right: 10px;
}
.a-dropdown {
  position: relative;
  width: 94px;
  // height: 52px;
  &__showbox {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #000;
    cursor: pointer;
  }
  &__text {
    // flex: 1 1 0%;
    overflow: hidden;
    white-space: nowrap;
    display: flex;
    align-items: center;
    span {
      font-size: 14px;
      color: #2557EF;
      font-weight: 700;
      margin-right: 10px;
    }
  }
  &__icon {
    flex: 0 0 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__selector {
    position: absolute;
    left: -24px;
    bottom: 1px;
    z-index: 1;
    transform: translate(0, 105%);
    background: #FFFFFF;
    box-shadow: 3px 7px 26px rgba(0, 0, 0, 0.08);
    color: #2557EF;
    font-weight: 700;
    font-size: 14px;
    width: 110px;
    text-align: center;
    overflow: hidden;
  }
  &__item {
    width: 100%;
    padding: 5px 10px;
    transition: background-color 100ms ease, color 100ms ease;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background-color: #D7E1FF;
    }
  }
}

.drop-fade {
  &-enter {
    opacity: 0;
    transform: translate(0, 95%) rotateX(15deg) perspective(300px);
    &-active {
      transition: transform .5s, opacity .5s;
      transform-origin: center top;
    }
    &-to {
      opacity: 10;
      transform: translate(0, 105%) rotateX(0deg) perpective(300px);
    }
  }
  &-leave {
    opacity: 0;
    transform: translate(0, 105%) rotateX(0deg) perspective(300px);
    &-active {
      transition: transform .5s, opacity .5s;
      transform-origin: center bottom;
    }
    &-to {
      opacity: 0;
      transform: translate(0, 110%) rotateX(15deg) perspective(300px);
    }
  }
}
</style>
