<template>
    <input placeholder="填写账号名称" class="username"/>
    <br />
    <input placeholder="输入密码" class="password" />
    <br />
    <button class="btn">注册</button>
</template>

<script>
export default {
  name: 'form'
}
</script>

<style scoped lang="scss">
@import '../style/variable.scss';
 input, button {
     border:none;
     outline:none;
     background:none;
 }
.username, .password{
    width:19rem;
    padding:3px 7px;
    margin-bottom:11px;
    border-bottom:3px solid $themColor1;
    color:$themColor1;
}
.username::placeholder, .password::placeholder {
    color:$themColor1;
}
.btn {
    width:20rem;
    height:30px;
    margin-top:10px;
    font-size:15px;
    font-weight: bloder;
    border: 3px solid $themColor1;
    border-radius:5px;
    color:$themColor1;
}
.btn:hover, .btn:focus{
    box-shadow: 1px 1px 1px rgb(139, 139, 139);
    background:$themColor1;
    color:#fff;

}
</style>
