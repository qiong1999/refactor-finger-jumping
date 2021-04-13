<template>
  <div class="home">
    <block />
    <bomb />
    <piano
    :position="state.position"
    :bottom="state.bottom"
    :left="state.left"
    :transform="state.transform"
     />
  </div>
</template>

<script>
import piano from '../components/piano'
import block from '../components/block'
import bomb from '../components/bomb'
import { reactive } from 'vue'
export default {
  name: 'home',
  components: {
    piano,
    block,
    bomb
  },
  setup () {
    const state = reactive({
      position: 'absolute;',
      bottom: '10px;',
      left: '50%;',
      transform: 'translate(-50%);'
    })
    return {
      state
    }
  }
}

</script>

<style lang="scss" scrope>
.home{
   position:relative;
   width:100vw;
   height:100vh;
   background:pink;
}
</style>
