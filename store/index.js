export const state = () => ({
  locales: ['en', 'es-ES'],
  locale: 'en',
  isNavOpen: false
})
export const mutations = {
  SET_LANG (state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  },
  setIsNavOpen (state, open) {
    state.isNavOpen = open
  },
  toggleNav (state) {
    state.isNavOpen = !state.isNavOpen
  }
}
