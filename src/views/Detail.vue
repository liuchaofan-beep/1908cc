<template>
    <div>
        <div class="top">商品详情</div> 
        <div class="box">
            <img :src="detail.img" class="img1">
            <div class="foot1">￥{{detail.money}}</div>
        </div>
        <div class="footer">
            <div></div>
            <div></div>
            <div></div>
            <button v-on:click="addcart" class="addcart">添加购物车</button>
        </div>

        <div v-show="isshow==true" class="isshow">
            <div class="qwe">
              <img :src="detail.img" class="img2">
             <div class="foot2">￥{{detail.money}}</div>
             <div class="jia">
                 <div class="gou">立即购买</div>
                 <div class="ok" v-on:click="isok">加入购物车</div>
             </div>
            </div>
        </div>
  
    </div>
</template>

<script>
export default {
    data(){
        return{
            detail:this.$route.query,
            sel:1,
            isshow:false
        }
    },
    methods:{
        addcart(){
              this.isshow = true
        },
        isok(){
            this.isshow = false
           var cart = JSON.parse(localStorage.getItem('cart'))
             if(!cart){
                 cart = []
             }
          
             cart.push(this.detail)
             localStorage.setItem('cart',JSON.stringify(cart))
        }
    }

}
</script>

<style scoped>
   .top{
       width: 100%;
       height: 40px;
       line-height: 40px;
       text-align: center;
       background: black;
       color: white;
       font-weight: 900;
   }
   .box{
       width: 100%;
   }
   .box .img1{
       width: 80%;
       height: 400px;
       margin: 20px 40px;
   }
  
   .foot1{
       width: 100%;
       height: 50px;
       line-height: 50px;
      text-indent: 40px;
      font-size: 20px;
      color: red;
   }
 
 
   .footer{
       width: 100%;
       height: 60px;
       position: fixed;
       bottom:0px;
       display: flex;
       justify-content: space-around;
       align-items: center;
   }
   .footer div{
       width: 40px;
       height: 40px;
       background: orange;
   }
   .footer .addcart{
       width: 150px;
       height: 50px;
       border: none;
       outline: none;
       background:red;
       color: white;
       font-size: 18px;
       float: right;
   }
   .isshow{
       width: 100%;
       height: 100vh;
       background:white;
       position: fixed;
       bottom: 0px;
       z-index: 1000;
       background: rgba(0, 0, 0, 0.6);
   }
   .isshow .qwe{
       width: 100%;
       height: 50%;
       background: white;
       position: fixed;
       bottom: 0;
   }
   .img2{
       width: 40%;
       height: 150px;
       float: left;
   }
   .foot2{
       width: 60%;
       height: 100px;
       float: left;
       margin-top: 20px;
       text-indent: 20px;
       font-size: 20px;
       font-weight: 700;
       color: red;
   }
 
   .jia{
       width: 100%;
       height: 50px;
       display: flex;
       position: fixed;
       bottom: 0px;
   }
   .jia div{
       width: 50%;
       height: 50px;
       color: white;
       text-align: center;
       line-height: 50px;
       font-size: 18px;
   }
   .jia .gou{
         background: orange;
   }
   .jia .ok{
       background: red;
   }
   
</style>