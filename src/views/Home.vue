<template>
  <div class="home">
    <h1>About Me</h1>
    <!--h1><span class="badge badge-info">Hello there, it's me Najim 🖐</span></h1-->
    <!--Card/-->
    <div id="container" class="row">
      <div class="col-md-6">
        <h3> 🖐 Hi there!,</h3>
        <p>
          My name is Najim, i really love to learn about tech stuffs, design, and music. Maybe I'm not a smart guy, but I believe that lot of experiences will make me better than smart.
        </p>
      </div>
      <div class="col-md-6">
        <img class="img-fluid" alt="Responsive image" src="@/assets/diri.jpg">
      </div>
    </div>
    <Sosmed/>
    <Footer/>
    </div>
</template>

<script>
import Sosmed from '@/components/Sosmed.vue'
import Footer from '@/components/Footer.vue'
//import Card from '../components/Card.vue'
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  components: { 
    Sosmed,
    Footer 
  },
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
    border-radius: 10px;
    overflow: auto;
    margin-left: 0.1px;
  }
  #container img{
    width: 230px;
    max-width: 100%;
    max-height: 100%;
    vertical-align: middle;
    border-radius: 10px;
    text-align: right;
    float: right;
  }
  .img-fluid{
    width: 100% \9;
  }
</style>
