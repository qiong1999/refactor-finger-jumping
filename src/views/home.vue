<template>
    <div>
        <block />
        <bomb />
        <piano />
    </div>
</template>

<script>
import piano from '../components/piano'
import block from '../components/block'
import bomb from '../components/bomb'
export default {
  name: 'home',
  props: ['red'],
  components: {
    piano,
    block,
    bomb
  }
}

</script>

<style lang="scss" scrope>

</style>
