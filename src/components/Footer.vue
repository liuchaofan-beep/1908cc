<template>
    <div class="footer">
     <div v-for="(item,index) in nav" :key="index" :class="sel==item.pathname?'sel':''" v-on:click="click(item)">
         {{item.title}}
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            nav:[
                {pathname:'/',title:"首页",name:"Home"},
                {pathname:'/classfiy',title:"分类",name:"Classfiy"},
                 {pathname:'/guang',title:"逛",name:"Guang"},
                {pathname:'/cart',title:"购物车",name:"Cart"},
                 {pathname:'/people',title:"个人中心",name:"People"}
            ],
            sel:window.location.pathname
        }
    },
    methods:{
        click(item){
            this.sel = item.pathname
            this.$router.history.push({
                 path:item.pathname,
                 query:item
             })
        }
    }
    
}
</script>

<style scoped>
   .footer{
       width: 100%;
       height: 50px;
       display: flex;
       justify-content: space-around;
        align-items: center;
        position: fixed;
        bottom: -2px;
        background: white;
   }
   .footer div{
       width: 20%;
       height: 40px;
       text-align: center;
       line-height: 40px;
   }
   a{
       text-decoration: none;
       color: black;
   }
   .sel{
       color: red;
   }
</style>