<template>
    <div class="box">
      <div class="block">
             <div class="top"></div>
             <div class="bottom"></div>
             <div class="left"></div>
             <div class="right"></div>
             <div class="front"></div>
             <div class="back"></div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'block3d'
}
</script>

<style lang="scss" scroped>
.box{
    display:inline-block;
    margin:100px;
    perspective: 100rem;
}
.block{
    width:50px;
    height:50px;
    position:relative;
    transform:rotateX(80deg);
    transform-style:preserve-3d;
    animation:run 10s infinite;
}
.block div{
    position:absolute;
    width:50px;
    height:50px;
    line-height:50px;
    text-align:center;
    background:rgb(202, 247, 114);
    border:3px solid rgb(165, 228, 39);
    border-radius:5px;
}
.top{
    top:-25px;
    transform:rotateX(90deg);
}
.bottom{
    top:25px;
    transform:rotateX(-90deg);
}
.left{
    left:-25px;
    transform:rotateY(90deg);
}
.right{
    left:25px;
    transform:rotateY(-90deg);
}
.front{
    transform:translateZ(25px);
}
.back{
    transform: translateZ(-25px) rotate(180deg);
}
@keyframes run {
    0%{
        transform:rotateY(0);
    }
    10%{
        transform:rotateY(180deg)
    }
    20%{
        transform:rotateX(180deg);
        transform:rotateY(180deg)
    }
    30%{
        transform:rotateZ(180deg);
    }
    40%{
        transform:rotateY(360deg);
    }
}
</style>
