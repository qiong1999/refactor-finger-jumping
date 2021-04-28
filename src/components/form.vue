<template>
  <input placeholder="填写账号名称" class="username" v-model="state.username" />
  <br />
  <input placeholder="填写邮箱" class="email" v-model="state.email" />
  <br />
  <input placeholder="输入密码" class="password" v-model="state.password" />
  <br />
  <button class="btn" @click="handleClick">{{type}}</button>
</template>

<script>
import { reactive } from 'vue'
import ajax from '../request'
import { useRouter } from 'vue-router'
export default {
  name: 'form',
  props: {
    goTo: String,
    type: String,
    req: String
  },
  setup (props, context) {
    const router = useRouter()
    const state = reactive({
      email: '',
      username: '',
      password: ''
    })
    const handleClick = () => {
      ajax({
        url: `http://localhost:5000/${props.req}`,
        type: 'post',
        data: state,
        success: function (data) {
          if (props.goTo) {
            localStorage.setItem('token', JSON.parse(data).token)
            console.log(localStorage.getItem('token'))
          }
          console.log('success')
          router.push(`/${props.goTo}/pageOne`)
        },
        error: function (data) {
          console.log(data, 'err')
        }
      })
    }
    return { handleClick, state }
  }
}
</script>

<style scoped lang="scss">
@import '../style/variable.scss';
input,
button {
  border: none;
  outline: none;
  background: none;
}
.username,
.password,
.email {
  width: 19rem;
  padding: 3px 7px;
  margin-bottom: 11px;
  border-bottom: 3px solid $themColor1;
  color: $themColor1;
}
.username::placeholder,
.password::placeholder,
.email::placeholder {
  color: $themColor1;
}
.btn {
  width: 20rem;
  height: 30px;
  margin-top: 10px;
  font-size: 15px;
  font-weight: bloder;
  border: 3px solid $themColor1;
  border-radius: 5px;
  color: $themColor1;
}
.btn:hover,
.btn:focus {
  box-shadow: 1px 1px 1px rgb(139, 139, 139);
  background: $themColor1;
  color: #fff;
}
</style>
