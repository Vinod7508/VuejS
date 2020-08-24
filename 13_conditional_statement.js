var app = new Vue({
    el: '#root',
    data: {
        isActive: false,
        count:0
    },
    methods: {
        incrmentCountValue : function(){
                   this.count++;
        }

    },
    computed: {

    }

})