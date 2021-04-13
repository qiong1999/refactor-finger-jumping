<template>
      <div class="piano" >
        <div class="line"></div>
          <piano-item></piano-item>
      </div>
</template>

<script>
import pianoItem from './pianoItem'
export default {
  name: 'piano',
  components: {
    pianoItem
  },
  setup () {
    const list = [1, 2, 3]
    return { list }
  }
}
</script>

<style lang="scss" scoped>
  .piano{
    width:21rem;
    height:21rem;
    background:rgb(42, 148, 219);
    text-align:center;
    padding-top:3.7rem;
    border-radius:23px;
    box-shadow: 7px 7px 17px rgb(3, 45, 83);
  }
  .line{
   // box-sizing: content-box;
    height:5px;
    width:100%;
    border-top:1px inset rgb(50, 146, 236);
    border-bottom:1px outset rgb(50, 146, 236);
    background:rgb(164, 185, 199);
    margin-bottom:1.3rem;
  }
</style>
