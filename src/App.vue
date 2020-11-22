<template>
  <div id="app">
    <div v-if="mulai" id="start">
      <Mulai v-on:lanjut="lanjut2($events)"/>
    </div>

    <div v-if="!mulai" id="header" >
      <h3>Najim's Personal Site</h3>
      <div id="nav" style="color: white, font-size: 21px;">
        <router-link to="/home">About Me</router-link> | 
        <router-link to="/education">Education</router-link> | 
        <router-link to="/experience">Experience</router-link>
      </div>
      <hr>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Mulai from '@/components/Mulai.vue'
export default {
  components: { 
    Mulai 
  },
  
  name: 'app',
  data() {
        return{
            mulai: true
        }
    },
    methods: {
        lanjut2: function(lanjut2){
            this.mulai = lanjut2;
            console.log(this.mulai)
            this.$router.push('home') 
        }
    }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #e9e9e9;
  height: 100%;
  background-image: url('assets/background3.jpg');
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}

html,body{
  height: 100%;
}

#header {
  display: block;
  padding: 30px 60px;
  padding-bottom: 10px;
  background-attachment: fixed;
  background-position: center;
  color: #ffffff;
  margin: auto;
}

#header h3{
  float: left;
}

hr{
    border: 0;
    height: 5px;
    margin-top: 0;
    background: -moz-linear-gradient(left, rgba(196,222,138,1) 0%, rgba(196,222,138,1) 12.5%, rgba(245,253,212,1) 12.5%, rgba(245,253,212,1) 25%, rgba(255,208,132,1) 25%, rgba(255,208,132,1) 37.5%, rgba(242,122,107,1) 37.5%, rgba(242,122,107,1) 50%, rgba(223,157,185,1) 50%, rgba(223,157,185,1) 62.5%, rgba(192,156,221,1) 62.5%, rgba(192,156,221,1) 75%, rgba(95,156,217,1) 75%, rgba(95,156,217,1) 87.5%, rgba(94,190,227,1) 87.5%, rgba(94,190,227,1) 87.5%, rgba(94,190,227,1) 100%);  /* FF3.6+ */
    background: -webkit-linear-gradient(left, rgba(196,222,138,1) 0%, rgba(196,222,138,1) 12.5%, rgba(245,253,212,1) 12.5%, rgba(245,253,212,1) 25%, rgba(255,208,132,1) 25%, rgba(255,208,132,1) 37.5%, rgba(242,122,107,1) 37.5%, rgba(242,122,107,1) 50%, rgba(223,157,185,1) 50%, rgba(223,157,185,1) 62.5%, rgba(192,156,221,1) 62.5%, rgba(192,156,221,1) 75%, rgba(95,156,217,1) 75%, rgba(95,156,217,1) 87.5%, rgba(94,190,227,1) 87.5%, rgba(94,190,227,1) 87.5%, rgba(94,190,227,1) 100%); /* Chrome10+,Safari5.1+ */
    background: -o-linear-gradient(left, rgba(196,222,138,1) 0%, rgba(196,222,138,1) 12.5%, rgba(245,253,212,1) 12.5%, rgba(245,253,212,1) 25%, rgba(255,208,132,1) 25%, rgba(255,208,132,1) 37.5%, rgba(242,122,107,1) 37.5%, rgba(242,122,107,1) 50%, rgba(223,157,185,1) 50%, rgba(223,157,185,1) 62.5%, rgba(192,156,221,1) 62.5%, rgba(192,156,221,1) 75%, rgba(95,156,217,1) 75%, rgba(95,156,217,1) 87.5%, rgba(94,190,227,1) 87.5%, rgba(94,190,227,1) 87.5%, rgba(94,190,227,1) 100%); /* Opera 11.10+ */
    background: -ms-linear-gradient(left, rgba(196,222,138,1) 0%, rgba(196,222,138,1) 12.5%, rgba(245,253,212,1) 12.5%, rgba(245,253,212,1) 25%, rgba(255,208,132,1) 25%, rgba(255,208,132,1) 37.5%, rgba(242,122,107,1) 37.5%, rgba(242,122,107,1) 50%, rgba(223,157,185,1) 50%, rgba(223,157,185,1) 62.5%, rgba(192,156,221,1) 62.5%, rgba(192,156,221,1) 75%, rgba(95,156,217,1) 75%, rgba(95,156,217,1) 87.5%, rgba(94,190,227,1) 87.5%, rgba(94,190,227,1) 87.5%, rgba(94,190,227,1) 100%); /* IE10+ */
    background: linear-gradient(to right, rgba(196,222,138,1) 0%, rgba(196,222,138,1) 12.5%, rgba(245,253,212,1) 12.5%, rgba(245,253,212,1) 25%, rgba(255,208,132,1) 25%, rgba(255,208,132,1) 37.5%, rgba(242,122,107,1) 37.5%, rgba(242,122,107,1) 50%, rgba(223,157,185,1) 50%, rgba(223,157,185,1) 62.5%, rgba(192,156,221,1) 62.5%, rgba(192,156,221,1) 75%, rgba(95,156,217,1) 75%, rgba(95,156,217,1) 87.5%, rgba(94,190,227,1) 87.5%, rgba(94,190,227,1) 87.5%, rgba(94,190,227,1) 100%); /* W3C */
}
#nav{
  text-align: right;
}

#nav a {
  font-weight: normal;
  color: #949494;
  font-size: 20px;
  transition: 0.3s;
}

#nav a:hover{
  color: white;
}

#nav a.router-link-exact-active {
  color: #e6a900;
}
</style>


