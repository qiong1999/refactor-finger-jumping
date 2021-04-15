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
      { class: 'blockRun1' },
      { class: 'blockRun' },
      { class: 'blockRun1' },
      { class: 'blockRun' },
      { class: 'blockRun' },
      { class: 'blockRun1' },
      { class: 'blockRun' },
      { class: 'blockRun1' },
      { class: 'blockRun' },
      { class: 'blockRun1' },
      { class: 'blockRun' },
      { class: 'blockRun1' },
      { class: 'blockRun1' },
      { class: 'blockRun' }
    ]

    const bombList = [
      { class: 'bombRun1' },
      { class: 'bombRun' },
      { class: 'bombRun1' },
      { class: 'bombRun' },
      { class: 'bombRun' }
    ]
    const state = reactive({
      position: 'absolute;',
      bottom: '17px;',
      left: '50%;',
      transform: 'translate(-50%);'
    })
    return {
      state, blockList, bombList
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
.blockRun{
  animation:blockRun timer() infinite;
  animation-fill-mode: forwards;
}
.blockRun1{
  animation:blockRun timer() infinite;
   animation-fill-mode:forwards;
}
@keyframes blockRun {
   0%{
     transform: translateY(0rem);
   }
   30%{
     transform:translateY(31rem)
   }
   70%{
     transform:translateY(71rem);
   }
   100%{
     transform:translateY(93rem);
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
.bombRun{
  animation:bombRun timer() infinite;
  animation-fill-mode:forwards;
}
.bombRun1{
  animation:bombRun timer() infinite;
  animation-fill-mode:forwards;
}
@keyframes bombRun {
   0%{
     transform: translateY(0px);
   }
   30%{
     transform:translateY(31rem)
   }
   70%{
     transform:translateY(71rem);
   }
   100%{
     transform:translateY(93rem);
   }
 }
</style>
