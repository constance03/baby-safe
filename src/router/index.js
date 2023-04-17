import { createWebHistory, createRouter } from 'vue-router'
import Login from '@/pages/Login.vue'
import BabyPage from '@/pages/BabyPage.vue'
import BabyPageAdmin from '@/pages/BabyPageAdmin.vue'
import MomPage from '@/pages/MomPage.vue'
import MomPageAdmin from '@/pages/MomPageAdmin.vue'
import Services from '@/pages/Services.vue'
import Beds from '@/pages/Beds.vue'

const routes = [
	{
		path: '/',
		name: 'Login',
		component: Login,
	},
	{
		path: '/babypage',
		name: 'BabyPage',
		component: BabyPage, 
		meta: { protected:true, permission: "USER" }
	},
	{
		path: '/babypageadmin',
		name: 'BabyPageAdmin',
		component: BabyPageAdmin, 
		meta: { protected:true, permission: "ADMIN" }
	},
	{
		path: '/mompage',
		name: 'MomPage',
		component: MomPage,
		meta: { protected:true, permission: "USER" }
	},
	{
		path: '/mompageadmin',
		name: 'MomPageAdmin',
		component: MomPageAdmin,
		meta: { protected:true, permission: "ADMIN" }
	},
    {
		path: '/services',
		name: 'Services',
		component: Services,
		meta: { protected:true, permission: "USER" }
	},
    {
		path: '/beds',
		name: 'Beds',
		component: Beds,
		meta: {
			protected: true,
			permission: "ADMIN"
		}
	}
]
const router = createRouter({
	history: createWebHistory(),
	routes, //same --- > routes:routes
})

router.beforeEach((to, from, next) => {

	try {
		if (to.meta.protected) {
			const user = JSON.parse(localStorage.getItem("user"))
			// const admin = JSON.parse(localStorage.getItem("admin"))

			if (user.role == to.meta.permission) {
				console.log(to.meta.permission);

				next();

				return;
			} else {
				console.log("Não permitido");
				next({ name: "Login"});
			}
		}
	} catch (error) {
		console.log("Eu sei");
	}

	next();


	// if (to.meta.protected && to.meta.permission == "admin") {
	// 	console.log("Permitido")
	// 	return;
	// }
    // const user = store.state.user.user;
    // const role = store.state.user.userRole;
    // const unauthorized = !user && (!role || role.length == 0);

	// if (to.meta.protected) {
	// 	if (to.meta.permission != 'admin') {
	// 		next({name: "Login", });
	// 	}
	// }

    // if(user === "admin") next( {name: 'BabyPageAdmin'});

    // if(to.name != 'Login' && unauthorized) next( {name: 'Login'});
    // else next();
    
});

export default router