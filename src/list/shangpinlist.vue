<template    >
   
      <v-card>
   
            <img   src="/assets/日系风淡雅背景.jpg"  alt="">   
        <v-card-title>  
          <v-spacer></v-spacer>
         
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="users"
          :items-per-page="5"
          class="elevation-1"
        >
           <template v-slot:[`item.option`]="{ item }">
            
          <v-icon    small class="mr-2"   @click="goDetial(item)"  >
            
            详情</v-icon >
         
        </template>
        </v-data-table>
      </v-card>
  
</template>

<script>
import axios from "axios";
import router from '../router'
export default {
  data: () => ({
    search: "",
    total: 0,
    loading: false,
    pageCount: 1,
    options: {
      page: 1,
      itemsPerPage: 5,
      pageStart: 1,
      pageStop: 2,
      sortBy: ["id", "address"],
      sortDesc: [false, false],
    },
    headers: [
 
      { text: "名称", value: "title", sortable: false },
         { text: "操作", value: "option", sortable: false },
      
 
    ],
    shangping: [],
    users: [],
    getURL: "/api/dingdanlist.php",
    drawer: false,
    right: null,
  }),
 
  created() {
    this.getshangpinglist();
  },
  methods: {
      
    goDetial(item) {
      console.log(item.id);
      var id = item.id; 
 
        router.push({name:"Detial",query:{goodsId:id}})

    },
    getshangpinglist() {
      axios.get(this.getURL).then((res) => {
        this.users = res.data; 
        this.total = res.data.length;
        console.log(this.users);
      });
    },
   
  },
};
</script>
