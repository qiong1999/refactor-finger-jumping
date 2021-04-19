<template>
  <div class="home">
    <div class="blockTrack">
       <span v-for="item in blockList" :key="item" :class="item['class']" >
         <block />
       </span>
    </div>
    <div class="bombTrack">
       <span v-for="item in bombList" :key="item" :class="item['class']" >
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
import { reactive, computed } from 'vue'
export default {
  name: 'home',
  components: {
    piano,
    block,
    bomb
  },
  setup () {
    const blockList = [
      { id: 'b1', class: 'blockRun1' },
      { id: 'b2', class: 'blockRun3' },
      { id: 'b3', class: 'blockRun1' },
      { id: 'b4', class: 'blockRun2' },
      { id: 'b5', class: 'blockRun3' },
      { id: 'b6', class: 'blockRun1' },
      { id: 'b7', class: 'blockRun3' },
      { id: 'b11', class: 'blockRun2' },
      { id: 'b22', class: 'blockRun1' },
      { id: 'b33', class: 'blockRun2' },
      { id: 'b44', class: 'blockRun1' },
      { id: 'b55', class: 'blockRun3' },
      { id: 'b66', class: 'blockRun1' },
      { id: 'b77', class: 'blockRun3' }
    ]

    const bombList = [
      { id: 'm1', class: 'bombRun1' },
      { id: 'm2', class: 'bombRun3' },
      { id: 'm3', class: 'bombRun1' },
      { id: 'm4', class: 'bombRun3' },
      { id: 'm5', class: 'bombRun2' }
    ]
    const handleClick = () => {
      console.log('click')
    }
    return {
      blockList, bombList, handleClick
    }
  }
}

</script>

<style lang="scss" scrope>
@import '../style/variable.scss';
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
  max-width:18.9rem;
  top:0;
  bottom:21rem;
  left:50%;
  transform:translate(-50%);

}
.blockTrack{
 & span{
  display:inline-block;
  width:2.7rem;
}
}
.blockRun1{
  animation:blockRun timer() infinite;
  //animation-fill-mode: forwards;
}
.blockRun2{
  animation:blockRun timer() infinite;
  // animation-fill-mode:forwards;
}
.blockRun3{
  animation:blockRun timer() infinite;
  // animation-fill-mode:forwards;
}
@keyframes blockRun {
   0%{
     transform: translateY(0px);
   }
   100%{
     transform:translateY(87vh);
   }
 }
.bombTrack{
 & span {
   display:inline-block;
   width:2.9rem;
 }
 & span:nth-child(2){
   margin-right:2.5rem;
 }
}
.bombRun1{
  animation:bombRun timer() infinite;
 // animation-fill-mode:forwards;
}
.bombRun2{
  animation:bombRun timer() infinite;
//  animation-fill-mode:forwards;
}
.bombRun3{
  animation:bombRun timer() infinite;
//  animation-fill-mode:forwards;
}
@keyframes bombRun {
   0%{
     transform: translateY(0px);
   }
   100%{
     transform:translateY(87vh);
   }
 }
</style>
