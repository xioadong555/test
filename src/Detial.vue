
<template>
<v-flex xs12 class="text-xs-center text-sm-center text-md-center text-lg-center"> 

       <div>
    <v-alert
      outlined
      color="purple"
    >
         <p class="text-left">
   设计题目：
    </p>
      <div     class="title">
  {{title}}
      </div>
      <div>
      
      </div>
    </v-alert>
    <v-alert
      outlined
      color="green"
      text
      class="text-left"
    >
         <p class="text-left">
详细描述：
    </p>
          {{content}}
    </v-alert>
 </div>  
<v-chip   class="ma-2"
      color="blue"
      outlined>   相关资料预览 </v-chip>     <br/>
   <img :src="imageUrl" height="150" v-if="imageUrl"/> <br/>
        <v-btn   block     depressed
      color="primary"    @click="xiazai"  >赞助￥{{money}} 获取相关资料</v-btn>
  <v-btn   block     depressed
      color="warning"    >支付遇到问题请联系</v-btn>
  <v-btn   block     depressed
      color="warning"    >QQ:2027578070</v-btn>
</v-flex> 
</template>
<script>

import axios from "axios";
import router from './router'
export default {
  data: () => ({
 shangpin: [],
title: '', 
imgid:[],
 content: '', 
yuanma:[],
   getURL: "/api/chaxundantiao.php",
 money: '' ,
 imageUrl:'',
       goodsId: "",
  }),
  created() {
       // 接收GoodsInfo.vue传过来的goodsId
      this.goodsId = this.$route.query.goodsId
            console.log('ID:')
      console.log(this.goodsId)
      
       this.ChaXun();
  },
  methods: {   
       xiazai() {
               router.push({name:"zhifu", query:{goodsId:this.goodsId,money:this.money}})
                
 },   
  ChaXun() {
      axios.get('/api/chaxundantiao.php', 
   { params: {
        id: this.goodsId//window.location.href.split("=")[1],
    },}).then((res) => {
        this.shangpin = res.data; 
        console.log('服务器返回id'+ res.data[0].id);
         this.imageUrl = res.data[0].imgid;
              this.id = res.data[0].id;
                 this.title = res.data[0].title;
               this.content = res.data[0].content;
                  this.money = res.data[0].money;
    
  
      });
    },
  },
};
</script>