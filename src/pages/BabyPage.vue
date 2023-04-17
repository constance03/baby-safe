<script>
import Header from '../components/Header.vue'
import Sidebar from '../components/Sidebar.vue'
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: "BabyPage",
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
      <h2 style="text-align: center; padding-top: 40px;">Bebê</h2>
   </div>

   <div>
      <div class="container-fluid p-5 d-flex flex-wrap justify-content-evenly" style="gap: 20px;">
         <div class="card" style="width: 18rem;">
      <div class="card-header" style="text-align: center;"> Informações gerais </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Nome do bebê: <span style="font-weight: bolder;">João Cavalcanti</span></li>
    <li class="list-group-item">Data de nascimento: <span style="font-weight: bolder;">03/12/2022</span></li> 
    <li class="list-group-item">Nome da mãe: <span style="font-weight: bolder;">Rosangela Souza</span></li>
    <li class="list-group-item">Tipo sanguíneo: <span style="font-weight: bolder; color: red">O+</span></li>
    <li class="list-group-item">Altura: <span style="font-weight: bolder;">0,52 cm</span></li>
    <li class="list-group-item">Peso: <span style="font-weight: bolder;">3,25 kg</span></li>
  </ul>
</div>

<div class="card" style="width: 18rem;">
      <div class="card-header" style="text-align: center;"> Exames </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Teste do pezinho: <span style="font-weight: bolder; color: green;">Sim</span></li>
    <li class="list-group-item">Teste da orelinha: <span style="font-weight: bolder; color: green;">Sim</span></li> 
    <li class="list-group-item">Teste da linguinha: <span style="font-weight: bolder; color: red">Não</span></li>
    <li class="list-group-item">Teste do coraçãozinho: <span style="font-weight: bolder; color: red">Não</span></li>
    <li class="list-group-item">Outro exame? <span style="font-weight: bolder; color: red">Não</span></li>
    <li class="list-group-item">Observação: <span style="font-weight: bolder;"></span></li>
  </ul>
</div>

<div class="card" style="width: 18rem;">
      <div class="card-header" style="text-align: center;"> Rastreamento do bebê </div>
  <ul class="list-group list-group-flush">
   <li class="list-group-item">Leito: <span style="font-weight: bolder;">Maternidade-13</span></li> 
    <li class="list-group-item">Local atual: <span style="font-weight: bolder;">Raio X</span><span> - 09:41 AM</span></li>
  </ul>
</div>

<div class="card" style="width: 40rem;">
      <div class="card-header" style="text-align: center;"> Histórico de Rastreamento </div>
  <ul class="list-group list-group-flush">
   <li class="list-group-item">Local atual: <span style="font-weight: bolder;">Raio X</span><span > - 09:41 AM</span></li>
  </ul>
  <ul class="list-group list-group-flush">
   <li class="list-group-item">Local atual: <span style="font-weight: bolder;">405</span><span > - 07:21 AM</span></li>
  </ul>
  <ul class="list-group list-group-flush">
   <li class="list-group-item">Local atual: <span style="font-weight: bolder;">408</span><span > - 05:21 AM</span></li>
  </ul>
  <ul class="list-group list-group-flush">
   <li class="list-group-item">Local atual: <span style="font-weight: bolder;">605</span><span > - 03:21 AM</span></li>
  </ul>
</div>

</div>
   </div>


  </div>
   </div>
</template>

<style scoped>
</style>
