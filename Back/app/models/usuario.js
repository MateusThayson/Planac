const mongoose = require('mongoose');

module.exports = function(){
    let Usuarioschema = mongoose.Schema({

        nome: {
            type: "String",
            required: true,
        },
        email: {
            type: "String",
            required: true,
        },
        senha: {
            type: "String",
            required: true,
        }
    })
    return mongoose.model("Usuario", Usuarioschema);
}();