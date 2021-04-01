export default function ({ redirect }) {
  if (process.client) {
    if (window.innerWidth < 1200) {
      window.onNuxtReady(() => {
        window.$nuxt.$router.push('/small-screen')
      })
    } else {
      alert(window.innerWidth)
    }
  }
}
