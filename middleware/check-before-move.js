export default function () {
  if (process.client) {
    if (window.innerWidth < 1200) {
      window.onNuxtReady(() => {
        window.$nuxt.$router.push('/small-screen')
      })
    }
  }
}
