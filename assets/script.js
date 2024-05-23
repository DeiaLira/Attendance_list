const handlingForms = {

    data() {
        return {
            inscritos: window.inscritos,
            newInscrito:{}
        }
    },
    methods: {
        addInscrito: function() {
            this.inscritos.push(this.newInscrito);
            this.newInscrito = {};

            localStorage.setItem("inscritos", JSON.stringify(this.inscritos));
        }
    },
    created() {
        this.inscritos = localStorage.getItem("inscritos") ? JSON.parse(localStorage.getItem("inscritos")) : this.inscritos;
    },
    updated() { 
        localStorage.setItem("inscritos", JSON.stringify(this.inscritos));
    } //Também podemos transformar em um método, e vinculá-lo aos botões add e clear.

};

Vue.createApp(handlingForms).mount('#app');