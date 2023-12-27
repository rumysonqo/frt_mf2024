<script setup>
import {ref, onMounted} from "vue"
import axios from 'axios'
import Tabla_mic_eess from "@/components/Tabla_mic_eess.vue";
import Graf_mic_eess from "@/components/Graf_mic_eess.vue";

const url='http://api_mf2024.redcusconorte.gob.pe/api/';

//programas
let subpro=ref('')
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

//actividades
let cod_act=''
let actividades=ref([])
async function get_actividades(){
  try {
      const response = await axios.get(url+'actividades'+'/'+cod_prg+'/'+cod_prd)
      actividades.value = response.data
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

//sub productos
let cod_sub=''
let sub_productos=ref([])
async function get_sub_productos(){
  try {
      const response = await axios.get(url+'sub_productos'+'/'+cod_prg+'/'+cod_prd+'/'+cod_act)
      sub_productos.value = response.data
    } catch (e) {
      error.value = e
    }
}

let metas_mic_eess=ref([])
let met_eess=ref([])
let nom_eess=ref([])
async function get_metas_micro_eess(){
  try {
      const response = await axios.get(url+'metas_micro_eess'+'/'+cod_prg+'/'+cod_prd+'/'+cod_act+'/'+cod_sub+'/'+cod_mic)
      metas_mic_eess.value = response.data
      if(metas_mic_eess.value.length>0){
        met_eess.value.length=metas_mic_eess.value.length
        nom_eess.value.length=metas_mic_eess.value.length
        let i=0;
        metas_mic_eess.value.forEach(function(num) {
            met_eess.value[i]=num['meta'];
            nom_eess.value[i]=num['nom_eess'];
            i++
        });

      }else{
        met_eess.value=[]
        nom_eess.value=[]
      }
    } catch (e) {
      error.value = e
    }
}

function get_nom_subpro(){
  let cmb_subpro=document.getElementById('sub_pro');
  subpro.value=cmb_subpro.options[cmb_subpro.selectedIndex].text;
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
                    <select @change="get_actividades()" v-model="cod_prd" class="form-select" >
                        <option value="" disabled selected>Seleccione un producto</option>
                        <option v-for="prd in productos" :value="prd.cod_producto">
                        {{ prd.producto }}
                        </option>
                    </select>
                </div>
            </div>

            <div class="row mb-3">
                <div class="col-3">
                    <h4 class="text-end">Actividades</h4>
                </div>
                <div class="col-8">
                    <select @change="get_sub_productos()" v-model="cod_act" class="form-select" >
                        <option value="" disabled selected>Seleccione una actividad</option>
                        <option v-for="act in actividades" :value="act.cod_actividad">
                        {{ act.actividad }}
                        </option>
                    </select>
                </div>
            </div>

            <div class="row mb-3">
                <div class="col-3">
                    <h4 class="text-end">Sub Productos</h4>
                </div>
                <div class="col-8">
                    <select @change="get_metas_micro_eess(), get_nom_subpro()" v-model="cod_sub" id="sub_pro" class="form-select" multiple size="10">
                        <option value="" disabled selected>Seleccione un sub producto</option>
                        <option v-for="sub in sub_productos" :value="sub.cod_sub_finalidad">
                        {{ sub.sub_finalidad }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <h3 class="text-center">{{subpro}}</h3>
                </div>

            </div>
            <div class="row">
                <div class="col-2">
                    
                    <div class="sh1">
                        <h4>Micro Redes</h4>
                        <select @change="get_metas_micro_eess()" v-model="cod_mic" class="form-select" multiple size="10">
                            <option v-for="mic in micro_red" :value="mic.cod_micro_red">
                            {{ mic.nom_micro_red }}
                            </option>
                        </select>
                    </div>
                </div>
                <div class="col-5">
                    <Tabla_mic_eess :dat="metas_mic_eess"/>
                </div>
                <div class="col-5">
                    <Graf_mic_eess :met="met_eess" :nom="nom_eess"/>
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