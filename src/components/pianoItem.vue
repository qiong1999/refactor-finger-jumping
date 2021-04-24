<template>
    <div
    class="wrapper"
    @click="handleClick"
    @mousedown="handledown"
    @mousemove="handlemove"
    @mouseup="handleup"
    >
      <div class="white">
        <div id="c"></div>
        <div id="d"></div>
        <div id="e"></div>
        <div id="f"></div>
        <div id="g"></div>
        <div id="a"></div>
        <div id="b"></div>
      </div>
      <div class="black">
        <div id="cd"></div>
        <div id="de"></div>
        <div id="fg"></div>
        <div id="ga"></div>
        <div id="ab"></div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'pianoItem',
  setup () {
    const audioMap = {
      c: '/audio/c3.mp3',
      cd: '/audio/c-3.mp3',
      d: '/audio/d3.mp3',
      de: '/audio/d-3.mp3',
      e: '/audio/e3.mp3',
      f: '/audio/f3.mp3',
      fg: '/audio/f-3.mp3',
      g: '/audio/g3.mp3',
      ga: '/audio/g-3.mp3',
      a: '/audio/a3.mp3',
      ab: '/audio/a-3.mp3',
      b: '/audio/b3.mp3'
    }
    const audioDiv = document.createElement('audio')
    const handledown = (e) => {
      console.log('mousedown')
    }
    const handlemove = (e) => {
      console.log('mousemove')
    }
    const handlup = (e) => {
      console.log('mouseup')
    }
    const handleClick = (e) => {
      const id = e.target.id
      audioDiv.src = audioMap[id]
      document.body.appendChild(audioDiv)
      // console.log('audio', audioDiv)
      audioDiv.play()
    }
    return { handleClick }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/variable.scss';
  $n:(1,3,5,7,9);
  .wrapper
  {
    display:inline-block;
    position:relative;
    //background:#fff;
    border-radius:20px;
   // border:none;
   border:3px solid $borderColor1;
   box-shadow: 3px 3px 3px $borderColor1;
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
    border-top:11px solid $boxShadow1;
    box-shadow:1px 1px 1px rgb(238, 237, 237);
    &:active{
      background:linear-gradient(#fff,#fff,#fff,rgb(212, 211, 211));
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
