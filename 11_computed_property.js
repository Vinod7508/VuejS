var app = new Vue({
    el: '#root',
    data: {
        firstname: '',
        lastname: '',
        meter: '',
        maths: 0,
        science: 0,
        english: 0
    },
    methods: {
        runme: function () {
            console.log("this is first method")
            return "i am a method"
        }
    },
    computed: {
        computedfullName: function () {
            return this.firstname + "" + this.lastname
        },
        ConvertTOCentimeter: function () {
            return this.meter * 100;
        },
        totalSubjectMarks: function () {
            return parseInt(this.maths) + parseInt(this.english) + parseInt(this.science);
        }
    }

})