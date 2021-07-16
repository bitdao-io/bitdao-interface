<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  head () {
    return {
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('BitDAODesc')
        },
        {
          hid: 'description',
          name: 'description',
          content: this.$t('BitDAODesc')
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.$t('BitDAODesc')
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: `https://www.bitdao.io/${this.$i18n.locale === 'en' ? '' : this.$i18n.locale}`
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: `https://www.bitdao.io/${this.$i18n.locale === 'en' ? '' : this.$i18n.locale}`
        }
      ]
    }
  }
}
</script>
