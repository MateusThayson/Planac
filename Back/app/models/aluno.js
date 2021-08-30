const mongoose = require('mongoose');


module.exports = function(){
    let AlunoSchema = mongoose.Schema({
        nome: {
            type: "String",
            required: true,
        },
        curso: {
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
        totalHorasCadastradas: {
            type: Number,
            required: true,
        },
        horasCadastradasCategoria1: {
            type: Number,
            required: true,
        },
        horasCadastradasCategoria2: {
            type: Number,
            required: true,
        },
        horasCadastradasCategoria3: {
            type: Number,
            required: true,
        },
        horasCadastradasCategoria4: {
            type: Number,
            required: true,
        },
        horasCadastradasCategoria5: {
            type: Number,
            required: true,
        },
        horasCadastradasCategoria6: {
            type: Number,
            required: true,
        },
        horasCadastradasCategoria7: {
            type: Number,
            required: true,
        },
        cargaHorariaTotal: {
            type: Number,
            required: true,
        },
        horasRestantes: {
            type: Number,
            required: true,
        }
    })
    return mongoose.model("Aluno", AlunoSchema);
}();