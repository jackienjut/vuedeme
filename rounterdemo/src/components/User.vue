<template>
<div>
  <h2>我是用户界面</h2>

  <h2>{{userId}}</h2>
</div>
</template>

<script>
export default {
  name: "User",
  computed:{
    userId(){
      //$route 当前活跃路由
      return this.$route.params.userid
    }
  }
}
</script>

<style scoped>

</style>