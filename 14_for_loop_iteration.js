var app = new Vue({
    el: '#root',
    data: {
    students: ["vinod", "lalit", "harshid"],
    teachers:[
        {name:'teacher 1 ', subject:'subject 1', location:{ street:"dublin road", city:"Athlone"}},
        {name:'teacher 2 ', subject:'subject 2', location:{ street:"Canal Road", city:"Dublin"}},
        {name:'teacher 3',  subject:'subject 3', location:{ street:"summerhill road", city:"Galway"}},
        {name:'teacher 4',  subject:'subject 4', location:{ street:"dublin road", city:"Cork"}}
    ]

    },
    methods: {




    },
    computed: {

    }

})