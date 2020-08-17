var instance = new Vue({
  
  el:'#root',
  data:{
    count:0
  },
  methods:{
    Incrementby1: function(){
      this.count++;
    },
    submitClick: function(){
      console.log("clicking for submit event");
    },
    btnClick: function(){
      console.log("cliking for capture event");
    },
    parentClass:function(){
      console.log("capturing the parent class event");
    }
  }



})