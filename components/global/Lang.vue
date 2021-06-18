<template>
  <div
    class="dropdown-container"
  >
    <div class="dropdown-inner">
      <button
        class="dropdown-button"
        @click="isOptionsExpanded = !isOptionsExpanded"
        @blur="isOptionsExpanded = false"
      >
        <!-- <svg-icon :icon-class="`lang-${$i18n.locale}`" class="lang-icon" /> -->
        <img :src="icons[$i18n.locale]" :alt="$i18n.locale" class="lang-img">
        <span>{{ $i18n.locale.toUpperCase() }}</span>
        <svg-icon icon-class="arrow-down" :class="['dropdown-icon', isOptionsExpanded ? 'rotate-180' : 'rotate-0']" />
      </button>
      <transition
        name="drop-fade"
      >
        <ul
          v-show="isOptionsExpanded"
          class="dropdown-ul"
        >
          <li
            v-for="(option, index) in options"
            :key="index"
            class="dropdown-li"
            :data-buried="`'click','header_lang','lang=${option.key}'`"
            @click="setOption(option)"
          >
            <img :src="icons[option.key]" :alt="option.value" class="lang-img">
            <!-- <svg-icon :icon-class="`lang-${option.key}`" class="lang-icon" /> -->
            {{ option.value }}
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isOptionsExpanded: false,
      selectedOption: {
        key: 'EN',
        value: 'EN'
      },
      options: [
        {
          key: 'en',
          value: 'EN'
        },
        {
          key: 'jp',
          value: 'JP'
        },
        {
          key: 'kr',
          value: 'KR'
        },
        {
          key: 'ru',
          value: 'RU'
        },
        {
          key: 'es',
          value: 'ES'
        }
      ],
      icons: {
        en: require('@/assets/image/lang/lang-en.svg'),
        jp: require('@/assets/image/lang/lang-jp.svg'),
        kr: require('@/assets/image/lang/lang-kr.svg'),
        ru: require('@/assets/image/lang/lang-ru.svg'),
        es: require('@/assets/image/lang/lang-es.svg')
      }
    }
  },
  methods: {
    setOption (option) {
      this.isOptionsExpanded = false
      const curLang = this.$i18n.locale
      if (curLang !== option.key) {
        this.selectedOption = option
        const localPath = this.switchLocalePath(option.key)
        this.$router.push({ path: localPath })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.lang-icon {
  font-size: 2rem;
  margin-right: 10px;
}
.lang-img {
  width: 30px;
  margin-right: 10px;
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

.dropdown-container {
  .dropdown-inner {
    position: relative;
    width: 94px;
    .dropdown-button {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: transparent;
      overflow: hidden;
      white-space: nowrap;
      display: flex;
      align-items: center;
      cursor: pointer;
      span {
        color: #2557EF;
        font-weight: 700;
        margin-right: 5px;
      }
    }
    .dropdown-ul {
      position: absolute;
      left: -24px;
      bottom: -6px;
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
      .dropdown-li {
        padding: 10px;
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
    .dropdown-icon {
      transition-duration: .4s;
      transition-property: transform;
      transform: rotate(0);
    }
    .rotate-180 {
      transform: rotate(180deg);
    }
    .rotate-0 {
      transform: rotate(0deg);
    }
  }
}
</style>
