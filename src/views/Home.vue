<template>
    <div>
       <div class="top">{{this.$route.meta.title}}</div>
          <!-- <Footer /> -->
    </div>
</template>

<script>


export default {
    components:{
   
    },
     data(){
         return{
             list:[]
         }
     },
     methods:{
        
     },
    
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
    position: fixed;
    top:0px
}
.main{
    width: 100%;
    margin-top: 40px;
    margin-bottom: 50px;
}
   .box{
       width: 100%;
       height: 80px;
       display: flex;
       flex-wrap: wrap;
     margin-top: 10px;
     background: pink;
   }

   .box .right{
       width: 60%;
       height: 80px;   
       float: left;
   }
  .box img{
       width: 30%;
       height: 80px;
       float: left;
   }
   .right div{
       width: 100%;
       height: 40px;
       line-height: 40px;
   }
</style>