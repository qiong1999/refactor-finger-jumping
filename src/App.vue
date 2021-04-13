<template>
  <home/>
</template>

<script>
import home from './views/home'
import { watch } from 'vue'
export default {
  name: 'App',
  components: {
    home
  },
  setup () {
    watch(() => {
      window.addEventListener('resize', (e) => {
        document.documentElement.fontsize = e.target.innerWidth / 7.5 + 'px'
      })
    })
    return {}
  }
}
</script>

<style lang="scss">
*{
  margin:0;
  padding:0;
}
</style>
