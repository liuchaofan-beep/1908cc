<template>
    <div>
         <div class="top">商品列表</div>
         <div class="box">
               <div v-for="(item,index) in newlist" :key="index" class="main" v-on:click="onclick(item)" >
              <img :src="item.img">
              <div style="font-size:14px">{{item.title}}</div>
              <div style="color:red">￥{{item.money}}</div>
          </div> 
         </div>
            
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            goodlist:[],
            newlist:[]
        }
    },
    methods:{
        onclick(item){
            this.$router.push({
                path:'/detail',
                query:item
            })
        }
    },
    mounted(){
        axios.get('/classify.json').then((res)=>{
             this.goodlist = res.data.good
             this.goodlist.forEach((ele)=>{
                 if(ele.type==this.$route.query.id){
                    this.newlist.push(ele)
                 }
               
             })
        })
        
    }

}
</script>

<style scoped>
.top{
    width: 100%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    background: black;
    color: white;
    font-weight: 900;
}
    .box{
       width: 100%;
       display: flex;
       flex-wrap: wrap;
       margin-bottom: 50px;
   }
   .box .main{
       width: 50%;
       height: 350px;

   }
  img{
      width: 100%;
      height: 250px;
  }
   
 
</style>