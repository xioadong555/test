<template    >
  <v-app>
        <v-app-bar dark="dark" color="primary"  app flat>
      <v-toolbar-title class="text-uppercase grey--text">
        <span >三文333wen.com</span>
      </v-toolbar-title>
  
      <v-spacer></v-spacer>
    </v-app-bar> 
      <v-main>
            <v-container fluid>
           <router-view />
        
            </v-container>
        </v-main>

  </v-app>
</template>
<script>

export default {
  name: "App",
  components: {

  },
  data: () => ({

  }),
  created() {
  },
  methods: {

  },
};
</script>
