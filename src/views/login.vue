<template>
    <div class="container">
        <div class="login">
           <a id="login" ref="aDom">login with GitHub</a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'login',
  setup () {
    return { }
  }
}
</script>

<style scoped lang="scss">
@import '../style/variable.scss';
.container{
  position:relative;
  width:100vw;
  height:100vh;
  & .login{
      position:absolute;
      left:50%;
      top:50%;
      transform:translate(-50%, -50%);
      & .titler{
         font-size:1.7rem;
         color:rgb(28, 96, 185);
      }
      & .loginPhoto {
          color:$borderColor1;
      }
  }
}
</style>
