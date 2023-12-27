<script setup>
import { RouterLink, RouterView } from 'vue-router'
import ToolingIcon from './components/icons/IconTooling.vue'
import HomeIcon from './components/icons/IconHome.vue'
import MenuIcon from './components/icons/IconMenu.vue'
import CloseIcon from './components/icons/IconClose.vue'
</script>

<template>
  <input type="checkbox" id="check">
  <div class="menu">
    <label for="check">
      <span class="ico" id="close"><CloseIcon/></span>
      <span class="ico" id="bars"><MenuIcon/></span>
    </label>
    <div class="head">menu</div>
    <ul>
      <li><RouterLink to="/"> <HomeIcon class="icono"/> Inicio</RouterLink></li>
      <li><RouterLink to="/por_micro_red"> <ToolingIcon class="icono"/> Por Micro Redes</RouterLink></li>
      <li><RouterLink to="/por_micro_red_eess"> <ToolingIcon class="icono"/> Por Micro Red / eess</RouterLink></li>
      <li><RouterLink to="/por_eess"> <ToolingIcon class="icono"/> Por Establecimiento</RouterLink></li>
    </ul>
  </div>

  <RouterView />
</template>

<style scoped>

.icono{
  width: 32px;
  font-size: 25px;
  text-align: center;
}

.menu{
  top:0;
  position: fixed;
  height: 100%;
  width: 250px;
  /*position: absolute;*/
  background: #0B54D5;
  z-index: 1;
  transition: 0.5s ease;
  transform: translateX(-250px);
  box-shadow: 0px 0px 8px 3px #1A1B1C;
}

.menu .head{
  color:#E9F9F8;
  font-size: 30px;
  font-weight: bold;
  padding: 10px;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 3px;
  background-color: #02225B;
}

ul{
  width: 100%;
  list-style: none;
  padding: 0px;
}

ul li{
  display: block;
  width: 100%;
}

ul li a{
  color:#F4F5F7;
  padding: 10px 10px;
  text-decoration: none;
  display: block;
  font-size: 20px;
  letter-spacing: 1px;
  position: relative;
  transition: 0.3s;
  overflow: hidden;
  text-transform: capitalize;
  margin-left: 2px;
}

ul li a:hover{
  background: #053bba;
  color:#11eeee;
  box-shadow: 1px 1px 8px 2px #07eee7;;
  border-radius: 10px;
  letter-spacing: 2px;
  box-shadow: 0px 0px 4px 2px #41eecb;
}

.ico{
  top:0;
  position: fixed;
  width: 55px;
  right: -55px;
  font-size: 25px;
  box-shadow: 0px 0px 5px 1px #303033;
  font-weight: bold;
  border-radius: 50%;
  color:#86F9F7;
  padding: 5px 8px;
  cursor: pointer;
  background: #C50505;
}

#bars{
  background: #0348b0;
}
#check:checked ~ .menu{
  transform:translateX(0);
}

#check:checked ~ .menu #bars{
  display: none;
}

input{
  visibility: hidden;
  display: none;
}

</style>
