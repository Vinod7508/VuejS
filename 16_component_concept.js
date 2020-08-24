// how we create component in vue

// var data= {
//     name:'ncp'    //global data share
// }


Vue.component('greeting', {
    template: '<p>hi there...i am {{name}}. <button @click="changeName">change the Name</button> </p>',  //this will chnage value in instance 1 only
    data: function () {   //in caseo of component..the data is function.
        // return data;
        return {
            name:'vinod'   //return fresh data everytime for those component instances
        }
    },
    methods: {
        changeName() {
            this.name = 'patil'
        }
    }
});



new Vue({
    el: '#vue-app-one',
    data: {

    },
    methods: {

    },
    computed: {

    }

})



new Vue({
    el: '#vue-app-two',
    data: {

    },
    methods: {

    },
    computed: {

    }
})