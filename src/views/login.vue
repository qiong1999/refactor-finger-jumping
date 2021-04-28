<template>
    <div class="container">
        <div class="login">
          <Form type="登录" goTo="home" req="users/login" />
        </div>
    </div>
</template>

<script>
import Form from '../components/form.vue'
export default {
  name: 'login',
  components: {
    Form
  },
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
