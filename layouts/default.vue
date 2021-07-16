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
          hid: 'og:description',
          name: 'og:description',
          content: this.$t('BitDAODesc')
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.$t('BitDAODesc')
        },
        {
          hid: 'title',
          name: 'title',
          content: this.$t('BitDAOTitle')
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.$t('BitDAOTitle')
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.$t('BitDAOTitle')
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
