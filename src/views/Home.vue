<template>
  <div class="home">
    <h1>About Me</h1>
    <!--h1><span class="badge badge-info">Hello there, it's me Najim 🖐</span></h1-->
    <!--Card/-->
    <div id="container">
      <img src="@/assets/diri.jpg">
      <h3> 🖐 Hi there!,</h3>
      <div  style="width: 50%">
      <p>
        My name is Najim, i really love to learn about tech stuffs, design, and music. Maybe I'm not a smart guy, but I believe that lot of experiences will make me better than smart.
      </p>
      </div>
    </div>
    <Sosmed/>
  </div>
</template>

<script>
import Sosmed from '@/components/Sosmed.vue'
//import Card from '../components/Card.vue'
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  components: { 
    Sosmed 
  },
  name: 'Home',
}
</script>

<style scoped>
  .home{
    padding: 0px 100px;
    text-align: left;
  }
  #container{
    width: 100%;
    background-color: rgba(0,0,0,0.4);
    padding: 20px;
    padding-bottom: 140px;
    border-radius: 10px;
  }

  #container img{
    float: right;
    width: 250px;
    position: relative;
    right: 0px ;
    border-radius: 10px;
  }
</style>
