<template>
  <div class="home">
    <block />
     <bomb />
    <div class="blockTrack">
      <span v-for="i in Tracks['blockTrack']" :key="i.key">
        <span v-for="item in i.value" :key="`${i.key} ${item}`" style=" background:green;">
          {{item}}{{i.key}}
        </span>
      </span>
    </div>
    <div class="bombTrack">
      <span v-for="i in 5" :key="i">{{i}}</span>
    </div>
    <div class="content">
      <piano
      @handleClick = "handleClick"
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
    const Tracks = reactive({
      blockTrack: [
        { key: 'c', value: 3 },
        { key: 'd', value: 2 },
        { key: 'e', value: 1 },
        { key: 'f', value: 0 },
        { key: 'g', value: 0 },
        { key: 'a', value: 0 },
        { key: 'b', value: 0 }],
      bombTrack: [
        { key: 'cd', value: 0 },
        { key: 'de', value: 0 },
        { key: 'fg', value: 0 },
        { key: 'ga', value: 0 },
        { key: 'ab', value: 0 }
      ]
    })
    const handleClick = (params) => {
      for (const track in Tracks) {
        // console.log(Tracks[track], 'track')
        for (const item in Tracks[track]) {
        //  console.log(Tracks[track][item], 'item')
          if (Tracks[track][item].key === params) {
            Tracks[track][item].value += 1
          }
        }
      }
    }
    return {
      Tracks,
      handleClick
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
  width:18.9rem;
  top:0;
  bottom:21rem;
  left:50%;
  transform:translate(-50%);
}
.blockTrack{
  vertical-align: top;
 & span{
  display:inline-block;
  vertical-align: top;
  width:2.7rem;
  height:100%;
  background:red;
  min-width:7px;
  & span{
    height:30px;
  }
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
  // height:100%;
  // background:yellow;
   transform:translateX(1.25rem);
  // transform:translateY(-100%)
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
