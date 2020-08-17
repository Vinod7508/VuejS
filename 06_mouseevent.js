var instance = new Vue ({
    el:'#root',
    data:{
        x:0,
        y:0
    },
    methods:{
        movefunction:  function(event){
           this.x = event.offsetX;
           this.y = event.offsetY;
           
        },
        overfunction : function(){
            console.log("this is message due to mouseover")
        },
        outfunction : function(){
            console.log("this is message coming due to mouse out event")
        }
    }
})