import { createWebHashHistory,createRouter } from "vue-router";

const routes = [
   {
      path:'/',
      name:'home',
      component:() => import('../home.vue')
   },
   {
      path:'/index',
      name: 'index',
      component:() => import('../view/index.vue')
   },
   {
      path:'/list',
      name: 'list',
      component:() => import('../view/list.vue')
   },
   {
      path:'/biaoguan',
      name: 'biaoguan',
      component:() => import('../view/yanjiufuwu/biaoguan.vue')
   },
   {
      path:'/linchuang',
      name: 'linchuang',
      component:() => import('../view/linchuang.vue')
   },
   {
      path:'/Biopharma-Services',
      name: 'Biopharma-Services',
      component:() => import('../view/Biopharma-Services.vue')
   },
   {
      path:'/Service-Support',
      name: 'Service-Support',
      component:() => import('../view/Service-Support.vue')
   },
   {
      path:'/resources',
      name: 'resources',
      component:() => import('../view/resources.vue')
   },
   {
      path:'/Technology',
      name: 'Technology',
      component:() => import('../view/Technology.vue')
   },
   {
      path:'/About',
      name: 'About',
      component:() => import('../view/About.vue')
   },
   {
      path:'/Contact-Us',
      name: 'Contact-Us',
      component:() => import('../view/Contact-Us.vue')
   },
]







// 创建路由实例
const router = createRouter({
   history:createWebHashHistory(),
   routes,
})
export default router;