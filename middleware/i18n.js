export default function ({
  isHMR, app, store, route, params, error, redirect
}) {
  if (isHMR) { return } else if (!params.lang) {
    return redirect('/en' + route.fullPath)
  }
  // based on directory structure _lang/xxxx, en/about has params.lang as "en"
  const locale = params.lang || 'en'
  store.commit('SET_LANG', locale) // set store
  app.i18n.locale = store.state.locale
}
