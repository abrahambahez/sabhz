export default {
    methods: {
        formatDate: function(str) {
            let date = new Date(str + 'T00:00:00');
            return date.toLocaleString('es-MX', 
              { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
            })
        }
    }
}
