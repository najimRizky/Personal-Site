<template>
  <div class="experience">
    <h1>Skill</h1>
    <div class="container">
      <div class="row text-center">
        <div class="col-md-6">
          <div id="rate">
            <h5 id="bhs"><span v-if="hover" class="badge badge-secondary">Vue</span></h5>
            <img id="Vue" src="@/assets/vue.png" 
            @mouseover="hover = true"
            @mouseleave="hover = false"
            >
            <i class="fa fa-star" aria-hidden="true" style="color:yellow"></i>
            <i class="fa fa-star" aria-hidden="true" ></i>
            <i class="fa fa-star" aria-hidden="true" ></i>
            <i class="fa fa-star" aria-hidden="true" ></i>
            <i class="fa fa-star" aria-hidden="true" ></i>
          </div>
          <div id="rate">
            <h5 id="bhs"><span v-if="hover" class="badge badge-secondary">HTML</span></h5>
            <img id="HTML" src="@/assets/html.png" 
            @mouseover="hover = true"
            @mouseleave="hover = false"
            >
            <i class="fa fa-star" aria-hidden="true" style="color:yellow"></i>
            <i class="fa fa-star" aria-hidden="true" style="color:yellow"></i>
            <i class="fa fa-star" aria-hidden="true" style="color:yellow"></i>
            <i class="fa fa-star" aria-hidden="true" ></i>
            <i class="fa fa-star" aria-hidden="true" ></i>
          </div>
          <div id="rate">
            <h5 id="bhs"><span v-if="hover" class="badge badge-secondary">CSS</span></h5>
            <img id="CSS" src="@/assets/css.png" 
            @mouseover="hover = true"
            @mouseleave="hover = false"
            >
            <i class="fa fa-star" aria-hidden="true" style="color:yellow"></i>
            <i class="fa fa-star" aria-hidden="true" style="color:yellow"></i>
            <i class="fa fa-star" aria-hidden="true" style="color:yellow"></i>
            <i class="fa fa-star" aria-hidden="true" ></i>
            <i class="fa fa-star" aria-hidden="true" ></i>
          </div>
        </div>
        <div class="col-md-6 ">
          <div id="rate">
            <h5 id="bhs"><span v-if="hover" class="badge badge-secondary">C</span></h5>
            <img id="C" src="@/assets/c.png" 
            @mouseover="hover = true"
            @mouseleave="hover = false"
            >
            <i class="fa fa-star" aria-hidden="true" style="color:yellow"></i>
            <i class="fa fa-star" aria-hidden="true" style="color:yellow"></i>
            <i class="fa fa-star" aria-hidden="true" style="color:yellow"></i>
            <i class="fa fa-star" aria-hidden="true" style="color:yellow"></i>
            <i class="fa fa-star" aria-hidden="true" ></i>
          </div>
          <div id="rate">
            <h5 id="bhs"><span v-if="hover" class="badge badge-secondary">Java</span></h5>
            <img id="Java" src="@/assets/java.png" 
            @mouseover="hover = true"
            @mouseleave="hover = false"
            >
            <i class="fa fa-star" aria-hidden="true" style="color:yellow"></i>
            <i class="fa fa-star" aria-hidden="true" ></i>
            <i class="fa fa-star" aria-hidden="true" ></i>
            <i class="fa fa-star" aria-hidden="true" ></i>
            <i class="fa fa-star" aria-hidden="true" ></i>
          </div>
          <div id="rate">
            <h5 id="bhs"><span v-if="hover" class="badge badge-secondary">Javascript</span></h5>
            <img id="Js" src="@/assets/js.png" 
            @mouseover="hover = true"
            @mouseleave="hover = false"
            >
            <i class="fa fa-star" aria-hidden="true" style="color:yellow"></i>
            <i class="fa fa-star" aria-hidden="true" style="color:yellow"></i>
            <i class="fa fa-star" aria-hidden="true" ></i>
            <i class="fa fa-star" aria-hidden="true" ></i>
            <i class="fa fa-star" aria-hidden="true" ></i>
          </div>
        </div>
      </div>
    </div>
    <Sosmed/>
  </div>

</template>

<script>
import Sosmed from '@/components/Sosmed.vue'

export default {
  components: { 
    Sosmed 
  },
  data(){
    return{
      hover: false,
    };
  }
}
</script>

<style scoped>
  .experience{
    padding: 0px 100px;
    text-align: left;
  }
  .container{
    width: 100%;
    background-color: rgba(0,0,0,0.4);
    padding: 20px;
    border-radius: 10px;
  }
  img{
    width: 40px;
  }
  i{
    margin: 0px 3px;
    font-size: 20px;
  }
  #rate{
    margin: 10px 0;
  }
  #bhs{
    position: absolute;
    text-align: right;
  }

</style>>