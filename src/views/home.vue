<template>
  <div class="home">
    <button class="login"  @click="handleTo('login')">登录</button>
    <button class="sign" @click="handleTo('sign')">注册</button>
    <div class="blockTrack">
      <span v-for="i in Tracks['blockTrack']" :key="i.key">
        <span v-for="item in i.value" :key="`${i.key} ${item}`" class="blockRun1">
          <block />
        </span>
      </span>
    </div>
    <div class="bombTrack">
      <span v-for="i in Tracks['bombTrack']" :key="i.key" ckass="blockRun1">
        <span v-for="item in i.value" :key="`${i.key} ${item}`" class="bombRun1">
          <bomb />
        </span>
      </span>
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
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
export default {
  name: 'home',
  components: {
    piano,
    block,
    bomb
  },
  setup (props, context) {
    console.log(props)
    const router = useRouter()
    const Tracks = reactive({
      blockTrack: [
        { key: 'c', value: [] },
        { key: 'd', value: [] },
        { key: 'e', value: [] },
        { key: 'f', value: [] },
        { key: 'g', value: [] },
        { key: 'a', value: [] },
        { key: 'b', value: [] }],
      bombTrack: [
        { key: 'cd', value: [] },
        { key: 'de', value: [] },
        { key: 'fg', value: [] },
        { key: 'ga', value: [] },
        { key: 'ab', value: [] }
      ]
    })
    const handleClick = (params) => {
      // let timer
      for (const track in Tracks) {
        // console.log(Tracks[track], 'track')
        for (const item in Tracks[track]) {
        //  console.log(Tracks[track][item], 'item')
          if (Tracks[track][item].key === params) {
            Tracks[track][item].value.unshift('1')
            setTimeout(() => {
              Tracks[track][item].value.pop()
            }, 5000)
          }
        }
      }
      // clearTimeout(timer)
    }
    const handleTo = (param) => {
      router.push(`/${param}`)
    }
    return {
      Tracks,
      handleClick,
      handleTo
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
   background:rgb(130, 231, 245);
   .login, .sign {
     float:right;
     border:none;
     outline:none;
     margin-top:1rem;
     padding:7px 17px;
     font-size:1.1rem;
     font-weight: bolder;
     background:none;
     color: $themColor1;
   }
   .login:focus, .sign:focus, .login:hover, .sign:hover{
     background:$themColor1;
     border-radius:3px;
     box-shadow:1px 1px 1px rgb(134, 134, 134);
     color:#fff;
   }
   .login{
     margin-right:10rem;
   }
   .sign {
     margin-right:7px;
   }
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
  min-width:7px;
  & span{
   position:absolute;
    height:30px;
  }
}
}
.blockRun1{
  top:0;
  animation:blockRun timer();
  animation-fill-mode: forwards;
}
.blockRun2{
  animation:blockRun timer();
  // animation-fill-mode:forwards;
}
.blockRun3{
  animation:blockRun timer();
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
  & span{
    position:absolute;
  }
 }
 & span:nth-child(2){
   margin-right:2.5rem;
 }
}
.bombRun1{
  animation:bombRun timer() ;
  animation-fill-mode:forwards;
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
