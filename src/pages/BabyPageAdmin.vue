<script>
import Header from '../components/Header.vue'
import SidebarAdmin from '../components/SidebarAdmin.vue'
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: "BabyPage",
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
      <h2 style="text-align: center; padding-top: 40px;">Bebês</h2>
   </div>

   <div>
      <div class="container-fluid p-5 d-flex flex-wrap justify-content-evenly" style="gap: 20px;">
         <div class="card" style="width: 68rem;">
      <div class="card-header" style="text-align: center;"> Paciente 1 </div>
  <ul class="list-group list-group-flush">
   <div class="d-flex">
      <li class="list-group-item">Nome do bebê: <p style="font-weight: bolder; width: 200px;">João Cavalcanti</p></li>
      <li class="list-group-item">Data de nascimento: <p style="font-weight: bolder; width: 200px;">03/12/2022</p></li> 
    <li class="list-group-item">Nome da mãe: <p style="font-weight: bolder; width: 200px;">Rosangela Souza</p></li>
    <li class="list-group-item">Leito: <p style="font-weight: bolder; color: red; width: 85px;">506</p></li>
    <li class="list-group-item">Altura: <p style="font-weight: bolder; width: 100px;">0,52 cm</p></li>
    <li class="list-group-item">Peso: <p style="font-weight: bolder; width: 100px;">3,25 kg</p></li>
   </div>
  </ul>
</div>

<div class="card" style="width: 68rem;">
      <div class="card-header" style="text-align: center;"> Paciente 2 </div>
  <ul class="list-group list-group-flush">
   <div class="d-flex">
      <li class="list-group-item">Nome do bebê: <p style="font-weight: bolder; width: 200px;">João Cavalcanti</p></li>
      <li class="list-group-item">Data de nascimento: <p style="font-weight: bolder; width: 200px;">03/12/2022</p></li> 
    <li class="list-group-item">Nome da mãe: <p style="font-weight: bolder; width: 200px;">Rosangela Souza</p></li>
    <li class="list-group-item">Leito: <p style="font-weight: bolder; color: red; width: 85px;">506</p></li>
    <li class="list-group-item">Altura: <p style="font-weight: bolder; width: 100px;">0,52 cm</p></li>
    <li class="list-group-item">Peso: <p style="font-weight: bolder; width: 100px;">3,25 kg</p></li>
   </div>
  </ul>
</div>


<div class="card" style="width: 68rem;">
      <div class="card-header" style="text-align: center;"> Paciente 3 </div>
  <ul class="list-group list-group-flush">
   <div class="d-flex">
      <li class="list-group-item">Nome do bebê: <p style="font-weight: bolder; width: 200px;">João Cavalcanti</p></li>
      <li class="list-group-item">Data de nascimento: <p style="font-weight: bolder; width: 200px;">03/12/2022</p></li> 
    <li class="list-group-item">Nome da mãe: <p style="font-weight: bolder; width: 200px;">Rosangela Souza</p></li>
    <li class="list-group-item">Leito: <p style="font-weight: bolder; color: red; width: 85px;">506</p></li>
    <li class="list-group-item">Altura: <p style="font-weight: bolder; width: 100px;">0,52 cm</p></li>
    <li class="list-group-item">Peso: <p style="font-weight: bolder; width: 100px;">3,25 kg</p></li>
   </div>
  </ul>
</div>


</div>
   </div>


  </div>
   </div>
</template>

<style scoped>
</style>
