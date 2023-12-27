<script setup>
import {ref, onMounted} from "vue"
import axios from 'axios'
import Tabla_metas_eess from "@/components/Tabla_metas_eess.vue";

const url='http://api_mf2024.redcusconorte.gob.pe/api/';

//programas
let estab=ref('')
let cod_prg=''
let programas=ref([])
async function get_programas(){
  try {
      const response = await axios.get(url+'programas')
      programas.value = response.data
      console.log('programas:',programas.value)
    } catch (e) {
      error.value = e
    }
}

//productos
let cod_prd=''
let productos=ref([])
async function get_productos(){
  try {
      const response = await axios.get(url+'productos'+'/'+cod_prg)
      productos.value = response.data
      console.log('productos:',productos)
    } catch (e) {
      error.value = e
    }
}


//MICRO REDES
let cod_mic=''
let micro_red=ref([])
async function get_micro_red(){
  try {
      const response = await axios.get(url+'micro_redes')
      micro_red.value = response.data
      console.log('micro red:',micro_red.value)
    } catch (e) {
      error.value = e
    }
}

//establecimientos
let cod_est=''
let eess=ref([])
async function get_eess(){
  try {
      const response = await axios.get(url+'eess'+'/'+cod_mic)
      eess.value = response.data
      console.log('micro red:',eess.value)
    } catch (e) {
      error.value = e
    }
}

let metas_eess=ref([])
async function get_metas_eess(){
  try {
      const response = await axios.get(url+'metas_eess'+'/'+cod_prg+'/'+cod_prd+'/'+cod_est)
      metas_eess.value = response.data
    } catch (e) {
      error.value = e
    }
}

function get_nom_eess(){
  let cmb_est=document.getElementById('cmb_eess');
  estab.value=cmb_est.options[cmb_est.selectedIndex].text;
}

onMounted(()=>{
  get_programas()
  get_micro_red()
})


</script>

<template>
    <main>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <h1 class="text-center">Metas Fisicas 2024 Red Cusco Norte</h1>
                </div>
            </div>
<div class="row">
    <div class="col-2 bg-light">
        <div class="sh1 p-2 mt-2 mb-2">
            <h4>Micro Redes</h4>
            <select @change="get_eess()" v-model="cod_mic" class="form-select" multiple size="10">
                <option v-for="mic in micro_red" :value="mic.cod_micro_red">
                {{ mic.nom_micro_red }}
                </option>
            </select>
        </div>

        <div class="sh1 p-2 mt-2 mb-2">
            <h4>Establecimientos</h4>
            <select @change="get_metas_eess(), get_nom_eess()" v-model="cod_est" id="cmb_eess" class="form-select" multiple size="15">
                <option v-for="est in eess" :value="est.cod_eess">
                {{ est.nom_eess }}
                </option>
            </select>
        </div>

    </div>


    <div class="col-10">


            <div class="row mb-3">
                <div class="col-3">
                    <h4 class="text-end">Programas Presupuestales</h4>
                </div>
                <div class="col-8">
                    <select @change="get_productos()" v-model="cod_prg" class="form-select" >
                        <option value="" disabled selected>Seleccione un programa</option>
                        <option v-for="prg in programas" :value="prg.cod_programa">
                        {{ prg.nom_programa }}
                        </option>
                    </select>
                </div>
            </div>

            <div class="row mb-3">
                <div class="col-3">
                    <h4 class="text-end">Productos</h4>
                </div>
                <div class="col-8">
                    <select @change="get_metas_eess(), get_nom_eess()" v-model="cod_prd" class="form-select" >
                        <option value="" disabled selected>Seleccione un producto</option>
                        <option v-for="prd in productos" :value="prd.cod_producto">
                        {{ prd.producto }}
                        </option>
                    </select>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <h3 class="text-center">Establecimiento: {{estab}}</h3>
                </div>

            </div>
            <div class="row">
                    
                <div class="col-12">
                    <Tabla_metas_eess :dat="metas_eess"/>
                </div>
            </div>

            </div>
        </div>

        </div>
    </main>
</template>
  
<style>
.sh1{
    box-shadow: 0px 0px 8px 2px #080808;
    border-radius: 10px;
    padding: 5px;
}

</style>