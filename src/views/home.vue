<template>
    <div>
        <block />
        <piano />
    </div>
</template>

<script>
import piano from '../components/piano'
import block from '../components/block3d'
export default {
  name: 'home',
  props: ['red'],
  components: {
    piano,
    block
  }
}

</script>

<style lang="scss" scrope>

</style>
