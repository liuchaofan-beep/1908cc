import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'



Vue.use(VueRouter)

  const routes = [
    {
      path:'/',
      name:'Main',
      component:Main
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta:{title:'首页',showfooter:true}
    },
    {
      path: '/classfiy',
      name: 'Classfiy',
      meta:{showfooter:true},
      component: () => import( '../views/Classfiy.vue')
    },
    {
      path: '/cart',
      name:'Cart',
      meta:{showfooter:true},
      component:() => import( '../views/Cart.vue')
    },
    {
      path: '/people',
      name: 'People',
      meta:{showfooter:true},
      component: () => import( '../views/People.vue')
    },
    
    {
      path: '/detail',
      name:'Detail',
      meta:{showfooter:false},
      component: () => import( '../views/Detail.vue')
    },
    {
      path: '/goodlist',
      name:'Goodlist',
      meta:{showfooter:true},
      component: () => import( '../views/Good.vue')
    },
    {
      path: '/guang',
      name:'Guang',
      meta:{showfooter:true},
      component: () => import( '../views/Guang.vue')
    }
 
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
