const app = new Vue({
    el: '#app',
    data:{
        title:'Caja de frutas',
        frutas: [
            {nombre: "Manzana", cantidad: 2},
            {nombre: "Platano", cantidad: 0},
            {nombre: "Pera", cantidad: 10}
        ],
        nuevaFruta: '',
        total: 0,
        /////////////////
        color: false,
        selected:''

    },
    methods: {
        // agregarFruta: function(){    
        // }
        agregarFruta () {
            this.frutas.push({
                nombre: this.nuevaFruta, 
                cantidad: 0
            }),
            this.nuevaFruta = "";
        }
    },
    computed: {
        sumarFrutas(){
            this.total = 0;
            for(fruta of this.frutas){
                this.total += fruta.cantidad;
            }
            return this.total;
        }
    }
});