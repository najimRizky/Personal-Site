<template>
    <div>
      <div id="teks">
          <img id="ava" src="@/assets/avatar.png">
          <h1>Hello, I'm Najim</h1>
          <p>I'm a Junior Programmer</p>
      </div>
      <button class="btn btn-outline-warning btn-lg" v-on:click="lanjut()">Learn more about me</button>
    </div>
</template>

<script>
export default {
    name: 'Mulai',
    data() {
        return{
            mulai: true
        }
    },
    methods: {
        lanjut: function(){
            console.log('tes')
            this.$emit('lanjut', false)
        }
    }
}
</script>

<style scoped>
button{
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  transition: 0.3s;
}

#ava{
  width: 124px;
  top: 35%;
  z-index: 2;
  text-align: left;
}

#teks {
  background-color: rgba(0, 0, 0, 0.4); /* Black w/opacity/see-through */
  color: white;
  font-weight: bold;
  border: 1px solid #f1f1f1;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 70%;
  padding: 20px;
  text-align: center;
  transition: 0.2s;
}

#teks:hover{
  transform: translate(-51%, -51%);
  box-shadow: 5px 7px 20px 0px  #fcfcfc;
}
</style>