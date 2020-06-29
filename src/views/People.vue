<template>
    <div>
           <div class="top">{{this.$route.query.title}}</div>
         <!-- <Footer /> -->
    </div>
</template>

<script>

export default {
    components:{
     
    },
    data(){
        return{
         
        }
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
}
</style>