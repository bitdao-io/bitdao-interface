export const state = () => ({
  title: 'BitDAO 🚀 🌙 ToDa Moon',
  toc: []
})

export const mutations = {
  setTitle (state, text) {
    state.title = text
  },
  setToc (state, toc) {
    state.toc = toc
  }
}
