const mongoose = require('mongoose');


module.exports = function(){
    let AlunoSchema = mongoose.Schema({
        nome: {
            type: "String",
            required: true,
        },
        matricula: {
            type: Number,
            required: true,
        },
        senha: {
            type: "String",
            required: true,
        },
    })
    return mongoose.model("Aluno", AlunoSchema);
}();