<script>
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
    name: "Login",
    setup() {
        const router = useRouter()

        const email = ref("");
        const pass = ref("");

        return {
            router,
        }
    },

    methods: {
      doLogin: function () {
        console.log("Email", this.email);
        console.log("Pass", this.pass);
        if(this.email == "admin") {
          localStorage.setItem("user", JSON.stringify({"name": "admin", "email": this.email, "role": "ADMIN"}))
          localStorage.setItem("isAuthenticated", 1)
          this.router.push('/babypageadmin');
        } else {
          localStorage.setItem("user", JSON.stringify({"name": "user", "email": this.email, "role": "USER"}))
          localStorage.setItem("isAuthenticated", 1)
          this.router.push('/babypage');
        }

        
      }
    },
})
</script>

<template>
   <section class="h-100 gradient-form" style="background-color: #eee;">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-xl-10" style=" height: 90vh; display: flex; align-items: center;">
        <div class="card rounded-3 text-black">
          <div class="row g-0" style="padding: 30px;">
            <div class="col-lg-6">
              <div class="card-body p-md-5 mx-md-4">

                <div class="text-center">
                  <img src="../assets/logo.png" style="width: 300px; padding-bottom: 40px;" alt="logo">
                </div>

                <form>
                  <p>Acesse a sua conta:</p>

                  <div class="form-outline mb-4">
                    <input type="email" id="form2Example11" class="form-control"
                     v-model="email"
                      placeholder="Email" />
                  </div>

                  <div class="form-outline mb-4">
                    <input type="password" id="form2Example22" v-model="pass" placeholder="Senha" class="form-control" />
    
                  </div>

                  <div class="text-center pt-1 mb-2 pb-1">
                    <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button" @click="doLogin">Entrar</button>
                  </div>

                </form>

              </div>
            </div>
            <div class="col-lg-6 d-flex align-items-center" style="background-color: #914fa4;">
              <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                <h4 class="mb-4">Baby Safe</h4>
                <p class="small mb-0 ">Uma solução com o objetivo de gerenciar e acompanhar o rastreamento de informações relevantes sobre um bebê recém nascido, como seu histórico médico, alimentação, desenvolvimento e outras informações importantes.</p>
              <p class="small mb-0 " style="padding-top: 10px; font-weight: bolder;">Uma forma ágil de médicos e a família monitorar a saúde e o bem-estar do bebê.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<style scoped>
</style>
