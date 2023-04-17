<script>
import Header from '../components/Header.vue'
import Sidebar from '../components/Sidebar.vue'
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: "MomPage",
    components: {
    Header,
    Sidebar
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
   <Sidebar/>
   <div class="d-flex flex-column">
   <div>
      <h2 style="text-align: center; padding-top: 40px;">Mamãe</h2>
   </div>
   <div class="container-fluid p-5 d-flex flex-wrap justify-content-evenly" style="gap: 20px;">
         <div class="card" style="width: 18rem;">
      <div class="card-header" style="text-align: center;"> Informações gerais </div>

  <ul class="list-group list-group-flush">
    <li class="list-group-item">Nome da mãe: <span style="font-weight: bolder;">Rosangela Almeida</span></li>
    <li class="list-group-item">Data de nascimento: <span style="font-weight: bolder;">01/10/1988</span></li> 
    <li class="list-group-item">Tipo sanguíneo: <span style="font-weight: bolder; color: red">O+</span></li>
    <li class="list-group-item">Acompanhante: <span style="font-weight: bolder;">Wesley Brandão</span></li>
  </ul>
</div>

<div class="card" style="width: 18rem;">
      <div class="card-header" style="text-align: center;"> Exames </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Algum exame? <span style="font-weight: bolder; color: red">Não</span></li>
    <li class="list-group-item">Observação: <span style="font-weight: bolder;"></span></li>
  </ul>
</div>

<div class="card" style="width: 18rem;">
      <div class="card-header" style="text-align: center;"> Rastreamento </div>
  <ul class="list-group list-group-flush">
   <li class="list-group-item">Leito: <span style="font-weight: bolder;">Maternidade-13</span></li> 
   <li class="list-group-item">Local atual: <span style="font-weight: bolder;">Maternidade-13</span></li>
  </ul>
</div>

</div>
</div>
   </div>
</template>

<style scoped>
</style>
