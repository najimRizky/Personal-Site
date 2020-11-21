<template>
  <div id="app">
    <div id="header">
      <h1>Najim's Personal Site</h1>
      <!--img src="assets/logo.png"-->
      <div id="nav" style="color: white, font-size: 21px;">
          <router-link to="/">Home</router-link> | 
          <router-link to="/education">Education</router-link> | 
          <router-link to="/experience">Experience</router-link> | 
          <router-link to="/contact">Contact</router-link>
      </div>
    </div>
      
    <router-view/>
  </div>
</template>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body{
  background-image: url('/assets/background.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}

#header {
  display: block;
  padding: 30px;
  background-color: #1a2631;
  /*background-image: url('assets/header.jpg');*/
  background-attachment: fixed;
  background-position: center;
  color: #ffffff;
  margin: auto;
}

#nav{
  text-align: right;
}

#header h1{
  float: left;
  font-weight: 500;
  font-size: 30px;
}

#nav a {
  font-weight: bold;
  color: #ffffff;
  font-size: 20px;
}

#nav a.router-link-exact-active {
  color: #31e6dd;
}
</style>
