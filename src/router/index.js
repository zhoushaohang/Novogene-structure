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
      path:'/BiopharmaServices',
      name: 'BiopharmaServices',
      component:() => import('../view/BiopharmaServices.vue')
   },
]







// 创建路由实例
const router = createRouter({
   history:createWebHashHistory(),
   routes,
})
export default router;