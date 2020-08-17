var test = new Vue({
    el:'#root',
    data:{
        vinod: 'hi vinod',
        sachin: 'how are you patil'
    },
    methods:{
      run : function( msg){
          return "i am learning vuejs hindi tutorial"  + msg; 
      },
      valueaccess : function(){
          return this.sachin
      }
    }
 })