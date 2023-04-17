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
   <div class="d-flex flex-column align-items-center" style="padding-left: 20vh;">
   <h1 style="text-align: center; padding-top: 20px;">Serviços</h1>
   <div class="d-flex flex-wrap">

      <div class="container-fluid p-5 d-flex flex-column justify-content-evenly " style="gap: 20px; max-width: fit-content; ">
         <h2 style="text-align: center;">Em andamento</h2>
         <div class="card" style="width: 18rem;">
      <div class="card-header" style="text-align: center;"> Serviço 1 - Exame </div>

  <ul class="list-group list-group-flush">
    <li class="list-group-item">Status do pedido: <span style="font-weight: bolder; color: green">Recebido</span></li>
    <li class="list-group-item">Pedido: <span style="font-weight: bolder;">Pedido de exame de urina</span></li> 
    <li class="list-group-item">Observação: <span style="font-weight: bolder;"></span></li>
  </ul>
</div>

<div class="card" style="width: 18rem;">
      <div class="card-header" style="text-align: center;"> Serviço 2 - Alimentação </div>

  <ul class="list-group list-group-flush">
    <li class="list-group-item">Status do pedido: <span style="font-weight: bolder; color: red">Solicitado</span></li>
    <li class="list-group-item">Pedido: <span style="font-weight: bolder;">Macarrão a bolanhesa</span></li> 
    <li class="list-group-item">Observação: <span>Sem cebola</span></li>
  </ul>
</div>


</div>
<div class="d-flex">
   <div class="container-fluid p-5 d-flex flex-column justify-content-evenly " style="gap: 20px; max-width: fit-content;">
         <h2 style="text-align: center;">Finalizado</h2>
         <div class="card" style="width: 18rem;">
      <div class="card-header" style="text-align: center;"> Serviço 1 - Manutenção </div>

  <ul class="list-group list-group-flush">
    <li class="list-group-item">Status do pedido: <span style="font-weight: bolder; color: blue">Finalizado</span></li>
    <li class="list-group-item">Pedido: <span style="font-weight: bolder;">Manutenção na TV</span></li> 
    <li class="list-group-item">Observação: <span>Canais não funcionando</span></li>
  </ul>
</div>

<div class="card" style="width: 18rem;">
      <div class="card-header" style="text-align: center;"> Serviço 2 - Rouparia </div>

  <ul class="list-group list-group-flush">
    <li class="list-group-item">Status do pedido: <span style="font-weight: bolder; color: blue">Finalizado</span></li>
    <li class="list-group-item">Pedido: <span style="font-weight: bolder;">Travesseiro extra</span></li> 
    <li class="list-group-item">Observação: <span></span></li>
  </ul>
</div>


</div>
</div>
   </div>

   </div>
</div>
</template>

<style scoped>
</style>
