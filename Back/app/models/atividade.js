const mongoose = require('mongoose');

module.exports = function(){
    let AtividadeSchema = mongoose.Schema({
        categoria: {
            type: mongoose.Schema.ObjectId,
            ref: "Categoria",
            required: true,
        },
        nome: {
            type: "String",
            required: true,
        },
        data: {
            type: Date,
            required: true,
        },
        horario: {
            type: "String",
            required: true,
        },
        cadastrada_no_sisac: {
            type: Boolean,
            required: false,
            default: false,
        },
        comprovante: {
            type: Boolean,
            required: false,
            default: false,
        },
        aluno: {
            type: mongoose.Schema.ObjectId,
            ref: "Aluno",
            required: true,
        }
    })
    return mongoose.model("Atividade", AtividadeSchema);
}();