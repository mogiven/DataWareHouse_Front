<template>
  <div id="app">
    <myHeader></myHeader>
    <router-view ></router-view>
   </div>
</template>

<script>
import  myHeader  from "@/components/Header.vue";
export default {
  name: 'App',
  components: 
  {
    myHeader
  }
}
</script>

<style>
</style>
