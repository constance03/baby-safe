<script>
import Header from '../components/Header.vue'
import SidebarAdmin from '../components/SidebarAdmin.vue'
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: "Beds",
    components: {
    Header,
    SidebarAdmin
  },
    setup() {
        const router = useRouter()
        return {
            router
        }
    }
})
</script>

<template>
   <Header/>
   <div class="d-flex">
   <SidebarAdmin/>
   <div class="d-flex flex-column">
   <div>
      <h2 style="text-align: center; padding-top: 40px;">Leitos</h2>
   </div>
   <div class="container-fluid p-5 d-flex flex-wrap justify-content-evenly" style="gap: 20px;">
         <div class="card" style="width: 68rem;">
      <div class="card-header" style="text-align: center;"> Informações gerais </div>

  <ul class="list-group list-group-flush">
   <div class="d-flex">
      <li class="list-group-item">Nome do leito: <p style="font-weight: bolder; width: 300px;">405</p></li>
      <li class="list-group-item">Setor: <p style="font-weight: bolder; width: 385px;">Maternidade</p></li>
    <li class="list-group-item">Status: <p style="font-weight: bolder; width: 300px; color:red">Ocupado</p></li> 
   </div>
   
  </ul>
</div>


<div class="card" style="width: 68rem;">
      <div class="card-header" style="text-align: center;"> Informações gerais </div>

  <ul class="list-group list-group-flush">
   <div class="d-flex">
      <li class="list-group-item">Nome do leito: <p style="font-weight: bolder; width: 300px;">607</p></li>
      <li class="list-group-item">Setor: <p style="font-weight: bolder; width: 385px;">Centro cirurgico</p></li>
      <li class="list-group-item">Status: <p style="font-weight: bolder; width: 300px; color:green">Livre</p></li> 
   </div>
   
  </ul>
</div>

<div class="card" style="width: 68rem;">
      <div class="card-header" style="text-align: center;"> Informações gerais </div>

  <ul class="list-group list-group-flush">
   <div class="d-flex">
      <li class="list-group-item">Nome do leito: <p style="font-weight: bolder; width: 300px;">234</p></li>
      <li class="list-group-item">Setor: <p style="font-weight: bolder; width: 385px;">Centro cirurgico</p></li>
    <li class="list-group-item">Status: <p style="font-weight: bolder; width: 300px; color:green">Livre</p></li> 
   </div>
   
  </ul>
</div>

<div class="card" style="width: 68rem;">
      <div class="card-header" style="text-align: center;"> Informações gerais </div>

  <ul class="list-group list-group-flush">
   <div class="d-flex">
      <li class="list-group-item">Nome do leito: <p style="font-weight: bolder; width: 300px;">546</p></li>
      <li class="list-group-item">Setor: <p style="font-weight: bolder; width: 385px;">Maternidade</p></li>
    <li class="list-group-item">Status: <p style="font-weight: bolder; width: 300px; color:red">Ocupado</p></li> 
   </div>
   
  </ul>
</div>

</div>

</div>
   </div>
</template>

<style scoped>
</style>
