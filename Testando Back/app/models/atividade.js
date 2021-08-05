const mongoose = require('mongoose');

module.exports = function(){
    let AtividadeSchema = mongoose.Schema({
        categoria: {
            type: "String",
            required: true,
        },
        nome: {
            type: "String",
            required: true,
        },
        data: {
            type: "String",
            required: true,
        },
        horario: {
            type: "String",
            required: true,
        },
        comcadastro: {
            type: Boolean,
            required: true,
        },
        comcomprovante: {
            type: Boolean,
            required: true,
        },
        aluno: {
            type: mongoose.Schema.ObjectId,
            ref: "Aluno",
        }
    })
    return mongoose.model("Atividade", AtividadeSchema);
}();