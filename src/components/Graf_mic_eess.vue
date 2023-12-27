<script setup>
import {ref, onMounted} from "vue"
import VueApexCharts from "vue3-apexcharts";

const props=defineProps({
  /*
  tot:Array,
  nom:Array,
  tit:String
*/
  met:{
    type:Array,
    required:true,
    default:[]
  },
  nom:{
    Array,
    required:true,
    default:[]
  }
})

let options=ref([])
let series=ref([])

options= {
      chart:{
        type:'bar',
        id:'metas',
        dropShadow: {
          enabled: true,
          color: '#070707',
          top: -1,
          left: 1,
          blur: 2,
          opacity: 0.5
        }
      },
      stroke: {
              width: 1,
              colors: ['#fff']
            },
      colors: ['#2185E4'],
      title: {
              text: 'Metas Fisicas 2024',
              align: 'center'
            },
      plotOptions: {
              bar: {
                borderRadius: 4,
                horizontal: true,
                barHeight: '90%',
                
              }
            },
      
      xaxis: {
        categories: props.nom,
        title: {
          text: 'Número'
        },
      },
      yaxis: {
        title: {
          text: 'Establecimientos'
        },
      },
    }
    series= [
        {
            name:'meta fisica',
          data: props.met
        },
    ]
    

</script>

<template>
  <div class="tab1 p-3 mb-5">
    <VueApexCharts width="100%" height=500px
      :options='options'
      :series='series'
      />
  </div>
</template>

<style>
  .tab1{
    box-shadow: 0px 0px 9px 2px #0F0F0F;
    border-radius: 10px;
  }
</style>