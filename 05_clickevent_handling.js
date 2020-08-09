var instance = new Vue ({
   el:'#root',
   data:{
    counter : 0
   },
   methods:{
    Increment: function(inc){
      this.counter = this.counter+ inc;
      return counter;
    },
    Deacrement: function(dec){
      this.counter = this.counter - dec;
      return counter;
    }
   }





})