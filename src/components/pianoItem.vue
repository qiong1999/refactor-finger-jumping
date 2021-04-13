<template>
    <div
    class="wrapper"
    @click="handleClick"
    >
      <div class="white">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="black">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'pianoItem',
  setup () {
    const handleClick = (e) => {
      console.log(e.target)
    }
    return { handleClick }
  }
}
</script>

<style lang="scss" scoped>
  $n:(1,3,5,7,9);
  .wrapper
  {
    display:inline-block;
    position:relative;
    //background:#fff;
    border-radius:20px;
   // border:none;
   border:3px solid rgb(7, 76, 133);
   box-shadow: 3px 3px 3px rgb(28, 96, 185);
  }
  .white div, .black div{
    display:inline-block;
    background:#fff;
  }
  .white div{
    width:2.5rem;
    height:17rem;
    margin-right:1px;
    border:1px outset rgb(247, 247, 247);
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    border-top:11px solid rgba(106, 151, 182, 0.3);
    box-shadow:1px 1px 1px rgb(238, 237, 237);
    &:active{
      background:linear-gradient(#fff,#fff,#fff,rgb(212, 211, 211));
      border-top:11px solid rgb(191, 220, 231,0.5);
    }
    &:nth-child(1){
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
    }
    &:nth-child(7){
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
    }

  }
  .black div{
    position:absolute;
    top:11px;
    width:2.5rem;
    height:11rem;
    border-bottom-right-radius: 9px;
    border-bottom-left-radius: 9px;
    background:black;
    &:nth-child(1){
      left:1.35rem;
    }
    &:nth-child(2){
      left:1.35rem*3;
    }
    &:nth-child(3){
      left:1.35rem*7;
    }
    &:nth-child(4){
      left:1.35rem*9;
    }
    &:nth-child(5){
      left:1.35rem*11;
    }
    &:active{
      border:1px solid black;
    }
  }
</style>
