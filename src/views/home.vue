<template>
  <div class="home">
    <div class="blockTrack">
       <span>
         <block />
       </span>
       <span>
          <block />
       </span>
       <span>
          <block />
       </span>
       <span>
          <block />
       </span>
       <span>
          <block />
       </span>
       <span>
          <block />
       </span>
       <span>
          <block />
       </span>
    </div>
    <div class="bombTrack">
       <span>
         <bomb />
       </span>
       <span>
         <bomb />
       </span>
       <span>
         <bomb />
       </span>
       <span>
         <bomb />
       </span>
       <span>
         <bomb />
       </span>
    </div>
    <div class="content">
      <piano
     />
    </div>
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
    const blockList = [1, 2, 3, 4, 5, 6, 7]
    const bombList = [1, 2, 3, 4, 5]
    const state = reactive({
      position: 'absolute;',
      bottom: '17px;',
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
.content{
  position:absolute;
  bottom:10px;
  left:50%;
  transform: translate(-50%);
}
.blockTrack,.bombTrack{
  display:inline-block;
  position:absolute;
  top:0;
  bottom:21rem;
  left:50%;
  transform:translate(-50%);
}
.blockTrack{
 & span{
  display:inline-block;
  width:2.7rem;
  animation:blockRun 10s infinite;
}
}
@keyframes blockRun {
   0%{
     transform: translateY(0px);
   }
   10%{
     transform:translateY(200px)
   }
   20%{
     transform:translateY(300px);
   }
   30%{
     transform:translateY(500px);
   }
 }
.bombTrack{
 & span {
   display:inline-block;
   width:2.9rem;
 }
 & span:nth-child(2){
   margin-right:2.5rem;
    animation:bombRun 10s infinite;
 }
}
@keyframes bombRun {
   0%{
     transform: translateY(0px);
   }
   10%{
     transform:translateY(250px)
   }
   20%{
     transform:translateY(370px);
   }
   30%{
     transform:translateY(500px);
   }
 }
</style>
