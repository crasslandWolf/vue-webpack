<script>
    export default{
        data () {
           return {
                hello:"hello, welcome vue-webpack",
            }
        }
    }
</script>

<template>
    <div>
        <h1>{{hello}}</h1>
        <h2><a v-link="{ name: 'list' }">路由限制,您已经登录, 可以访问...</a><h2>
        <h2><a v-link="{ name: 'logout'}">点击退出</a></h2>
    </div>   
</template>
<style>
    .stylus-test 
        color: red;
    textarea
        border: 1px green solid
        max-width: 600px
        max-height: 280px
        min-width: 200px
        min-height: 50px
    .styl
        color: #ccc
    .code 
        color: #e96900
</style>