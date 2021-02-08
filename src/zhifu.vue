<template>
<div justify="center" > 
         <v-card>
    <v-toolbar
      color="cyan"
      dark
      flat
       justify="center"
    >
      <v-toolbar-title>感谢您的支持!</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs  justify="center"
          v-model="tab"
          align-with-title
        >
          <v-tabs-slider color="yellow"></v-tabs-slider>

          <v-tab  justify="center"
            v-for="item in items"
            :key="item.name"
          >
           <div  justify="center" > {{ item.name }} </div>
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in items"
        :key="item.name"
      >
        <v-card flat>
        
 <v-row justify="center" align="center">
       <v-img   max-height="300" max-width="200" :src=item.src  /> 
         <br>
        <v-col    cols="12" sm="4">
        </v-col> 
    </v-row>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
  
</div>
</template>
<script>
import axios from "axios";
export default {
  data: () => ({
        tab: null,
        items: [
 
        ],
         oldId:'',
oldMoney:'',
           timer: '',
        pay: false,
        src:require('./assets/zfb/29.99-zfb.jpg'),
        id:'',time:'',amount:'', shangping:'',
        value: 0,
        money:'',goodsId:'',
  }),
  created() {
      //获取未付款前 数据库 记录 id 金额 
                 axios.get('/get-api/zhiu.php', 
   { params: {
        id:  this.goodsId,
    },}).then((res) => {
console.log('data'+res.data[0]);
this.oldId=res.data[0].id;
this.oldMoney=res.data[0].amount;
 console.log('oldid'+this.oldId);
  console.log('oldMoney'+this.money);

      });
        this.money = this.$route.query.money
            console.log('money:')
            this.src=require('./assets/zfb/'+this.money+'-zfb.jpg'),
      console.log(this.money)
        this.goodsId = this.$route.query.goodsId
            console.log('ID:')
      console.log(this.goodsId)
  this.items.push({name:'微信',src:    require('./assets/wx/'+this.money+'-wx.png'),})
      this.items.push({name:'支付宝',src: require('./assets/zfb/'+this.money+'-zfb.jpg'),})
  },
  methods: {  
         get() {
          if(this.value>=99999){
              this.value =0;
          }
                axios.get('/get-api/zhiu.php', 
   { params: {
        id:  this.goodsId,
    },}).then((res) => {
        this.shangpin = res.data; 
        console.log('时间'+ res.data[0].time);
        var NewId  = res.data[0].id;
        console.log('价格'+ res.data[0].amount);
                 this.amount = res.data[0].amount;
                 var amount=this.amount;
               this.time = res.data[0].time;
           var now = new Date();
          var year = now.getFullYear(); //得到年份
          var month = now.getMonth();//得到月份
         var date = now.getDate();//得到日期
          var day = now.getDay();//得到周几
          var hour = now.getHours();//得到小时
          var minu = now.getMinutes();//得到分钟
          var sec = now.getSeconds();//得到秒
          var MS=now.getMilliseconds();//获取毫秒
        var week;
         month = month + 1;
         if (month < 10) month = "0" + month;
         if (date < 10) date = "0" + date;
         if (hour < 10) hour = "0" + hour;
         if (minu < 10) minu = "0" + minu;
         if (sec < 10) sec = "0" + sec;
         if (MS < 100)MS = "0" + MS;
         var arr_week = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
         week = arr_week[day];
         console.log(week)
         var time = "";
         time = year + "-" + month + "-" + date +  " " + hour + ":" + minu + ":" + sec ;
       console.log('time'+time); 
       var  paytime=this.time;
       console.log('paye'+paytime); 
       var cha= Date.parse(time)- Date.parse(paytime);
       cha=cha/1000;
       console.log('cha'+cha); 
       if((cha<5*60)&&(amount==this.money)&&(this.oldId!=NewId)){// 金额等于 且收款时间 小于 5分钟
              var id = window.location.href.split("=")[1]; 
              console.log('id'+id);
                var url = "/dingdang-api/xiazai.php?subject="+id; 
           window.location.href = url;
           this.pay=true;console.log('支付成功!');
       } 
      });
        this.value ++;
        console.log(this.value);
      }
    
     
  },

    mounted() {
       
      this.timer = setInterval(this.get, 5000);
    },
};
</script>