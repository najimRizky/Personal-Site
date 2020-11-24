<template>
  <div class="education">
    <h1>Education</h1>
    <div id="container">
      <div class="col-md-12 d-flex justify-content-center">
        <div id="cardImg">
          <img src="../assets/umn.png" class="img-fluid" alt="Responsive image">
        </div>
      </div>
      <hr style="background: white">
      <div class="col-md-12 d-flex justify-content-center">
        <div id="cardImg">
          <img src="../assets/dicoding.png" class="img-fluid" alt="Responsive image" >
        </div>
      </div>
      <hr style="background: white">
      <div class="col-md-12 d-flex justify-content-center">
        <div id="cardImg">
          <img src="../assets/progate.png" class="img-fluid" alt="Responsive image">
        </div>
      </div>
    </div>
    <Sosmed/>
    <Footer/>
  </div>
</template>

<script>
import Sosmed from '@/components/Sosmed.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: { 
    Sosmed,
    Footer 
  },
}
</script>

<style scoped>
  .education{
    padding: 0px 100px;
    text-align: left;
  }
  #container{
    width: 100%;
    background-color: rgba(0,0,0,0.4);
    padding: 20px;
    border-radius: 10px;
    overflow: auto;
    margin-right: -10px;
  }
  img{
    width: 300px;
  }

  #cardImg{
    margin: 10px;
    overflow: hidden;
  }

  .img-fluid{
    width: 100% \9;
  }
</style>
