<template>
    <div class="login">
        <div class="form">
            <Form />
        </div>
    </div>
</template>

<script>
import Form from '@/components/form.vue'
export default {
  name: 'sign',
  components: {
    Form
  }
}
</script>

<style scoped lang="scss">
 .login{
     position:relative;
     width:100vw;
     height:100vh;
     & .form {
     position:absolute;
     top:50%;
     left:50%;
     transform:translate(-50%, -50%);
     }
 }
</style>
