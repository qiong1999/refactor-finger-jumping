<template>
    <div class="block">
    </div>
</template>

<script>
</script>

<style lang="scss" scoped>
@import '../style/variable.scss';
    $widthB: widther();
    $widthF: 30-$widthB;
    .block{
        display:inline-block;
        width:30px;
        height:30px;
        background-image:radial-gradient(at 0px 30px,rgba(14, 156, 133, 0),rgba(15, 188, 194, 0.6));
        box-shadow:3px 3px 3px rgb(65, 175, 175);
    }
    .blockBomb{
        width:30px;
        height:30px;
        text-align:center;
        // background-image:radial-gradient(at 0px 30px,rgba(14, 156, 133, 0),rgba(15, 188, 194, 0.6));
       // box-shadow:3px 3px 3px rgb(65, 175, 175);
       &::before, &::after{
        content:'';
        height:30px;
        background-image:radial-gradient(at 0px 30px,rgba(14, 156, 133, 0),rgba(15, 188, 194, 0.6));
        box-shadow:3px 3px 3px rgb(65, 175, 175);
       }
       &::before{
        float:left;
        width:$widthB+px;
    }
       &::after{
        float:right;
        width:$widthF+px;
        animation:afterRun 1s;
        animation-fill-mode:forwards;
    }
    }
    @keyframes afterRun{
        0%{
            transform:translateX(5px);
        }
        50%{
            transform:translate(5px ,11px) rotate(11deg);
        }
        70%{
            transform:translate(5px ,21px) rotate(11deg);
        }
        100%{
            transform:translate(6px ,31px) rotate(11deg);
        }
    }
</style>
