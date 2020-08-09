var instance = new Vue ({
  el:'#root',
  data:{

  },
  methods:{
    keyPressfun : function(e){
        console.log(`you press the ${e.key} character`)
    },
    keyupfun: function(e){
        console.log("keyup event is fired")
    },
    keydownfun:function(e){
        console.log(`you have down ${e.code} value`)
    }

  }


})