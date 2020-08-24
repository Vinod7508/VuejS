var app = new Vue({
    el: '#root',
    data: {
        isActive: true
    },
    methods: {
        ToggleClass: function(){
           this.isActive = !this.isActive;
        }

    },
    computed: {

    }

})