module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
 
  devServer: {
    open: true, //是否自动弹出浏览器页面
    host: "localhost", 
    port: '8081',
    https: false,
    hotOnly: false, 
   proxy: {
     
        'api': {
        
         target: 'http://git.333wen.com/',
           changeOrigin: true,
      
         
     },
            
 
        
    },
} 
}