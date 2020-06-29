<template>
    <div>
      
       <div class="top">
             <div v-for="(item,index) in nav" :key="index" :class="sel==item.id?'sel':''" v-on:click="onclick(item)">
               {{item.name}}
           </div>
             </div>
         
           <div class="main">
               <div v-for="(item,index) in news" :key="index" class="new" v-show="item.pid==sel">
                   {{item.title}}
               </div>
           </div>
      
           
    </div>
</template>

<script>
import axios from 'axios'
export default {
   data(){
       return{
         nav:[],
         news:[],
         sel:1
       }
   },
     mounted(){
           axios.get('/new.json').then((res)=>{
               this.nav = res.data.nav
               this.news = res.data.news
             
           })
       } ,
       methods:{
           onclick(item){
               this.sel = item.id
           }
       }
}
</script>

<style scoped>
.box{
    width: 100%;
}
  .top{
      width: 100%;
      height: 50px;
      background: skyblue;
      display: inline-flex;
      align-items: center;
       white-space: nowrap;
      overflow-y: hidden;
      overflow-x: scroll;
  }
  .top::-webkit-scrollbar{
    display: none;
  }
  
  .top div{
      width: 50px;
       height: 47px;
       text-align: center;
       line-height: 47px;
       color: white;
       margin-left: 20px;
  }
  .main{
      width: 100%;
     
  }
  .sel{
         width: 50px;
       height: 47px;
       color: white;
       text-align: center;
       line-height: 47px;
      font-weight: 700;
      border-bottom: 3px solid white;
  }
  .new{
    width: 90%;
    height: 100px;
   display: flex;
   align-items: center;
   margin-left: 20px;
    font-size: 20px;
    font-weight: 700;
  }
 
  

</style>