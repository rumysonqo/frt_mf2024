<script setup>
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net';

DataTable.use(DataTablesCore);

defineProps({
  dat: {
    type: Array,
    required: true
  }
})

const col=[{data:'producto'},{data:'actividad'},{data:'sub_finalidad'},{data:'trazador',className:'centrado'},{data:'meta_fisica',className:'der_bold'},{data:'unidad_medida',className:'centrado'}]
const opt={responsive:true, pageLength:10, autowidth:false, language:{search:'Buscar', decimal:'.',thousands:',', lengthMenu:'Mostrando _MENU_ registros por pagina', zeroRecords:'No hay registros que mostrar', info:'Mostrando _START_ a _END_ de _TOTAL_ registros', infoEmpty:'Mostrando registros del 0 al 0 de un total de 0 registros',infoFiltered:'(filtrado de un total de _MAX_ registros)',paginate:{firts:'Primero', previous:'Anterior', next:'Siguiente', last:'Ultimo'}} }
//columnas de metas totales
</script>

<template>
  <div class="tab1 p-2">
  <DataTable :data="dat" :columns="col" :options="opt" class="display hover cell-border table compact table-striped">
      <thead>
          <tr>
              <th style="width: 30%;">Producto</th>
              <th style="width: 25%;">Actividad</th>
              <th style="width: 20%;">Sub Finalidad</th>
              <th style="width: 5%;">Trazador</th>
              <th style="width: 10%;">Meta Fisica</th>
              <th style="width: 10%;">Unidad de Medidad</th>
          </tr>
      </thead>
      </DataTable>
  </div>

</template>

<style>
@import 'datatables.net-dt';
  .derecha{
    text-align: right;
  }
  .der_bold{
    text-align: right;
    font-weight: bold;
  }
  .centrado{
    text-align: center;
  }
  .tab1{
    box-shadow: 0px 0px 9px 2px #0F0F0F;
    border-radius: 10px;
  }
</style>