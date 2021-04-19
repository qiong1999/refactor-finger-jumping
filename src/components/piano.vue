<template>
      <div class="piano" @click="Click">
        <div class="line"></div>
          <piano-item></piano-item>
      </div>
</template>

<script>
import { computed, reactive } from 'vue'
import pianoItem from './pianoItem'
export default {
  name: 'piano',
  components: {
    pianoItem
  },
  props: [],
  setup (propsco, context) {
    const Click = (e) => {
      console.log(e.target)
      context.emit('handleClick', e.target.id)
    }
    return { Click }
  }
}
</script>

<style lang="scss" scoped>
@import'../style/variable';
  .piano{
    width:21rem;
    height:21rem;
    background:$themColor2;
    text-align:center;
    padding-top:3.7rem;
    border-radius:23px;
    box-shadow: 7px 7px 17px rgb(3, 45, 83);
  }
  .line{
   // box-sizing: content-box;
    height:5px;
    width:100%;
    border-top:1px inset $lineColor2;
    border-bottom:1px outset $lineColor2;
    background:rgb(228, 232, 235);
    margin-bottom:1.3rem;
  }
</style>
