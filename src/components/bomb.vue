<template>
    <div class="bomb">
        <div class="line"></div>
        <div class="header"></div>
        <div class="bodyer"></div>
    </div>
</template>

<script>
export default {
  name: 'bomb'
}
</script>

<style lang="scss" scoped>
    .line{
        width:5px;
        height:15px;
        transform:translate(-1px,9px) rotateZ(-21deg);
        background:rgb(248, 213, 54);
    }
    .header{
        width:11px;
        height:7px;
        transform:translateY(6px) rotateZ(-41deg);

        background-color:rgba(0,0,0,0.6);

    }
    .bodyer{
        width:40px;
        height:40px;
        border-radius:20px;
        box-shadow: 2px 2px 2px rgb(83, 83, 83);
        background-color:rgb(155, 153, 153);
        background-image:radial-gradient(at 30px 7px,rgba(0,0,0,0),rgba(0,0,0,0.6))
    }
</style>
