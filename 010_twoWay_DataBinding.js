var app = new Vue ({
    el:'#root',
    data:{
       character:'',
       name:'sachin',
       email:'sachin@gmail.com'
    },
    methods:{
        Pressfunction:function(e){
            this.character= e.key;
        }
    },
    computed:{

    }

})