var app = new Vue ({
    el:'#my-app',
    data:{

    },
    methods:{
        keypressfunction: function(){
            console.log("i am running")
        },
        keyupfunction: function(){
            console.log("i am getting ouput after clicking alt and enter")
        },
        BackupspaceWorking: function(){
            console.log("i am deleting a entered the data")
        },
        KeycodeMessage: function(){
            console.log("you have enter hexvalue")
        }
    },
    computed:{

    }

})