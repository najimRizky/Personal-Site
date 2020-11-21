<template>
  <div class="home">
    <h1><span class="badge badge-info">Hello there, it's me Najim 🖐</span></h1>
    <Card/>
  </div>
</template>

<script>
import Card from '../components/Card.vue'
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    Card
    //HelloWorld
  }
}
</script>

<style scoped>
  /*.home{
    background-image: url('../assets/background.jpg');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      background-attachment: fixed;
  }*/
</style>
