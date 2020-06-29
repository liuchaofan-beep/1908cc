<template>
    <div>
           <div class="top">{{this.$route.query.title}}</div>
           <div class="put"><input type="text" placeholder="请搜索商品"></div>
           <div class="top2">
               <div>Boys</div><span>|</span>
               <div>Girls</div><span>|</span>
               <div>Kids</div><span>|</span>
               <div>Lifrstyle</div>
           </div>
            <div class="main">
                <div class="left" >
                  <div v-for="(item,index) in nav" :key="index" v-on:click="sel(item)"
                   :class="selindex==item.id?'sel':''">
                      {{item.name}}
                  </div>
              </div>
              <div  class="right">
                   <div v-for="(item,index) in list" :key="index"  v-show="item.pid==selindex" v-on:click="good(item)">
                       {{item.title}}
                   </div>
              </div>
             
            </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    components:{
   
    },
    data(){
        return{
            nav:[],
            selindex:1,
            list:[],
        }
    },
    methods:{
       sel(item){
           this.selindex = item.id
       },
       good(item){
           this.$router.push({
               path:'/goodlist',
               query:item
           })
   
       }
    },
     mounted(){
        axios.get('/classify.json').then((res)=>{
             this.nav = res.data.nav
            this.list = res.data.list
        })
      
     }
  
    
}
</script>

<style scoped>
.put{
    width: 100%;
    height: 40px;
    background: rgb(230, 227, 227);
    line-height: 35px;
    text-align: center;
}
input{
    width: 90%;
    height: 30px;
    border-radius: 20px;
    outline: none;
    border: none;
    text-indent: 10px;
}
.top2{
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  border-bottom: 1px solid lightgrey;
}
span{
    font-size: 14px;
    color: lightgrey;
}
.top2 div{
    width: 23%;
    height: 40px;
    line-height: 40px;
    text-align: center;

}
.top{
    width: 100%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    background: black;
    color: white;
    font-weight: 900;
}
.main{
    width: 100%;
}
.left{
    width: 40%;
    float: left;
    background: rgb(241, 240, 240);
}
.left div{
    width: 100%;
    height: 60px;
    line-height: 60px;
   text-indent: 20px;
   font-weight: 700;
}
.right{
    width: 60%;
    float: left;
}
.right div{
    width: 100%;
    height: 60px;
    line-height: 60px;
    text-indent: 10px;
    border-bottom: 1px solid lightgray;
}
.sel{
    background: white;
}

</style>