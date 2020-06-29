<template>
    <div>
           <div class="top">{{this.$route.query.title}}</div>
           <div class="main" v-for="(item,index) in cartlist" :key="index">
               <div class="check"><input type="checkbox" :checked="item.check" v-on:click="change(item)"></div>
               <img :src="item.img" >
               <div class="right">
                   <div style="color:red">{{item.price}}</div>
                   <div><button v-on:click="sub(item)">-</button>&nbsp;&nbsp;{{item.len}}&nbsp;&nbsp;<button v-on:click="add(item)">+</button></div>
               </div>
           </div>
            <div>{{tolmoney}}</div>
         <!-- <Footer /> -->
    </div>
</template>

<script>
export default {
    components:{
      
    },
    data(){
        return{
            cartlist:[],
            tolmoney:0
        }
    },
    methods:{
        change(item){
            item.check = !item.check
        },
        add(item){
            item.len++
        },
        sub(item){
            if(item.len>1){
                item.len--
            }
        }
    },
    mounted(){
         this.cartlist.push(this.$route.params)
    },
   watch:{
       cartlist:{
        handler:function(newval){
           this.tolmoney = 0
            newval.forEach(element => {
                if(element.check == true){
                 this.tolmoney +=  element.price * element.len
                }
            });
        },
         immediate:true,
           deep:true
       }
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
.main{
    width: 100%;
    height: 60px;
    display: flex;
    background: yellow;
    justify-content: space-around;
}
.main .check{
    width: 10%;
    height: 60px;
    line-height: 60px;
    text-align: center;
}
.main img{
    width: 30%;
    height: 60px;
}
.main .right{
    width: 60%;
    height: 60px;
}
.main .right div{
    margin-top: 10px;
}
button{
    width: 25px;
    height: 25px;
    border: none;
    outline: none;
    border-radius: 50%;
    background: orangered;
    color: white;
}
</style>