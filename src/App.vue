<template>
 <router-view />
</template>

<script>
import { watch } from 'vue'
// import block from './components/block'
export default {
  name: 'App',
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
