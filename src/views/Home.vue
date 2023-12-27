<script setup>
import {ref, onMounted} from "vue"
import axios from 'axios'
import Ver_totales from "@/components/Ver_totales.vue";

const url='http://api_mf2024.redcusconorte.gob.pe/api/';
let cod_prg='0002'
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

let metas_tot=ref([])
async function get_metas_totales(){
  try {
      const response = await axios.get(url+'metas_totales'+'/'+cod_prg)
      console.log('url:',url+'metas_totales'+'/'+cod_prg)
      metas_tot.value = response.data
      console.log('metas tot:',metas_tot.value)
    } catch (e) {
      error.value = e
    }
}

onMounted(()=>{
  get_programas()
  get_metas_totales()
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
                    <select @change="get_metas_totales()" v-model="cod_prg" class="form-select" >
                        <!-- <option value="" disabled selected>Seleccione un programa</option>-->
                        <option v-for="prg in programas" :value="prg.cod_programa">
                        {{ prg.nom_programa }}
                        </option>
                    </select>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <Ver_totales :dat="metas_tot"/>
                </div>
            </div>
        </div>
    </main>
</template>
  
<style>

</style>