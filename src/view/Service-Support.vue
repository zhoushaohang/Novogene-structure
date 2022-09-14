<template>
   <a-collapse v-model:activeKey="activeKey" @change="changeActivekey">
     <a-collapse-panel key="1" header="Service Support" class="kap">
       <p>
         <a-card hoverable style="width: 240px">
           <template #cover>
             <img
               alt="example"
               src="https://en.novogene.com/wp-content/uploads/sites/4/2020/04/istockphoto-1132211698-332x268-1.jpg"
             />
           </template>
           <a
             target="_blank"
             href="https://en.novogene.com/services/service-support/"
           >
             <a-card-meta title="Service Support">
             </a-card-meta>
           </a>
           <a-card-meta>
             <template #description>Service Support</template>
           </a-card-meta>
         </a-card>
       </p>
     </a-collapse-panel>
   </a-collapse>
 </template>
 <script>
 import { defineComponent, ref } from "vue";
 export default defineComponent({
   setup() {
     const activeKey = ref([]);
 
     const changeActivekey = (key) => {
       console.log(key);
     };
 
     return {
       activeKey,
       changeActivekey,
     };
   },
 });
 </script>
 <style>
 .kap p {
   float: left;
   margin-left: 20px;
 }
 </style>
 