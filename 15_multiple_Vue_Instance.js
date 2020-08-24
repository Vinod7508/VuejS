var one = new Vue({
    el: '#vue-app-one',
    data: {
        title: 'vue-vinod app 1'
    },
    methods: {

    },
    computed: {
        greet: function () {
            return "hello from app 1";
        }
    }

})

var two = new Vue({
    el: '#vue-app-two',
    data: {
        title: 'vue-vinod app 2'
    },
    methods: {

        changethetitle: function () {
            one.title = "this is the title updated by clicking button in instance two"
        }


    },
    computed: {
        greet: function () {
            return "this is vuejs instance two speaking";
        }
    }

})

