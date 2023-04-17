<script>
import Header from '../components/Header.vue'
import SidebarAdmin from '../components/SidebarAdmin.vue'
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: "MomPage",
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
      <h2 style="text-align: center; padding-top: 40px;">Mamães</h2>
   </div>
   <div class="container-fluid p-5 d-flex flex-wrap justify-content-evenly" style="gap: 20px;">
         <div class="card" style="width: 68rem;">
      <div class="card-header" style="text-align: center;"> Paciente 1 </div>

  <ul class="list-group list-group-flush">
   <div class="d-flex">
      <li class="list-group-item">Nome da mãe: <p style="font-weight: bolder; width: 300px;">Rosangela Almeida</p></li>
    <li class="list-group-item">Data de nascimento: <p style="font-weight: bolder; width: 200px;">04/10/1993</p></li> 
    <li class="list-group-item">Leito: <p style="font-weight: bolder; width: 200px; color: red; ">987</p></li>
    <li class="list-group-item">Acompanhante: <p style="font-weight: bolder; width: 251px;">Wesley Brandão</p></li>
   </div>
   
  </ul>
</div>


<div class="card" style="width: 68rem;">
      <div class="card-header" style="text-align: center;"> Paciente 2 </div>

  <ul class="list-group list-group-flush">
   <div class="d-flex">
      <li class="list-group-item">Nome da mãe: <p style="font-weight: bolder; width: 300px;">Carla Oliveira</p></li>
    <li class="list-group-item">Data de nascimento: <p style="font-weight: bolder; width: 200px;">01/06/1973</p></li> 
    <li class="list-group-item">Leito: <p style="font-weight: bolder; width: 200px; color: red; ">345</p></li>
    <li class="list-group-item">Acompanhante: <p style="font-weight: bolder; width: 251px;">Wesley Brandão</p></li>
   </div>
   
  </ul>
</div>

<div class="card" style="width: 68rem;">
      <div class="card-header" style="text-align: center;"> Paciente 3 </div>

  <ul class="list-group list-group-flush">
   <div class="d-flex">
      <li class="list-group-item">Nome da mãe: <p style="font-weight: bolder; width: 300px;">Aline Barbosa</p></li>
    <li class="list-group-item">Data de nascimento: <p style="font-weight: bolder; width: 200px;">30/01/1988</p></li> 
    <li class="list-group-item">Leito: <p style="font-weight: bolder; width: 200px; color: red; ">546</p></li>
    <li class="list-group-item">Acompanhante: <p style="font-weight: bolder; width: 251px;">Wesley Brandão</p></li>
   </div>
   
  </ul>
</div>

<div class="card" style="width: 68rem;">
      <div class="card-header" style="text-align: center;"> Paciente 4 </div>

  <ul class="list-group list-group-flush">
   <div class="d-flex">
      <li class="list-group-item">Nome da mãe: <p style="font-weight: bolder; width: 300px;">Fernanda Brandão</p></li>
    <li class="list-group-item">Data de nascimento: <p style="font-weight: bolder; width: 200px;">04/12/1968</p></li> 
    <li class="list-group-item">Leito: <p style="font-weight: bolder; width: 200px; color: red; ">647</p></li>
    <li class="list-group-item">Acompanhante: <p style="font-weight: bolder; width: 251px;">Wesley Brandão</p></li>
   </div>
   
  </ul>
</div>

</div>

</div>
   </div>
</template>

<style scoped>
</style>
