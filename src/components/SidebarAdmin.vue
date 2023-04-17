<template>
     <div style="width: 20vw; background-color: #914fa4;">
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span class="fs-5 d-none d-sm-inline">Menu</span>
                </a>
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" style="width: 10vw;" id="menu">
                    <li class="nav-item">
                        <a href="#" class="nav-link align-middle px-0 link-light">
                            <i class="fs-4 bi-house"><img src="../assets/baby-icon.png"/></i> <span class="ms-1 d-none d-sm-inline"  @click="$router.push('/babypageadmin')">Bebês</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link px-0 align-middle link-light" @click="$router.push('/mompageadmin')">
                            <i class="fs-4 bi-table"><img src="../assets/mom-icon.png"/></i> <span class="ms-1 d-none d-sm-inline">Mamães</span></a>
                    </li>
                    <li>
                        <a href="#" class="nav-link px-0 align-middle link-light">
                            <i class="fs-4 bi-people"><img src="../assets/beds-icon.png"/></i> <span class="ms-1 d-none d-sm-inline" @click="$router.push('/beds')">Leitos</span> </a>
                    </li>
                </ul>
                <hr>
                <div class="text-center pt-1 mb-2 pb-1">
                    <button class="btn btn-danger btn-block fa-lg gradient-custom-2 mb-3" type="button" @click="$router.push('/')">Sair</button>
                  </div>
            
        </div>
        </div>
</div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
    name: "Sidebar",
    setup() {
        const router = useRouter()
        return {
            router
        }
    }
})
  </script>
  
  <style>
</style>
