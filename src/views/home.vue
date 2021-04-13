<template>
    <div>
        <piano />
    </div>
</template>

<script>
import piano from '../components/piano'

export default {
  name: 'home',
  props: ['red'],
  components: {
    piano
  }
}

</script>

<style lang="scss" scrope>

</style>
