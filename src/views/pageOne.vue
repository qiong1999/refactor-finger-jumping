<template>
    <div> pageOne </div>
</template>

<script>
import { useRouter } from 'vue-router'
import ajax from '../request'
export default {
  name: 'pageOne',
  setup () {
    const router = useRouter()
    console.log('ajax', localStorage.getItem('token'))
    const handleClick = () => {
      ajax({
        url: 'http://localhost:5000/profiles/fingerJumping',
        type: 'get',
        header: { 'Content-Type': 'application/json', Authorization: localStorage.getItem('token') },
        success: function (data) {
          console.log(data, 'success')
        },
        error: function (data, xhr) {
          if (xhr.status === 401) {
            router.push('/login')
          }
          console.log(data, xhr.status, 'err')
        }
      })
    }
    handleClick()
    return { handleClick }
  }
}
</script>
