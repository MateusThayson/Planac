const mongoose = require('mongoose');

module.exports = function(){
    let CategoriaSchema = mongoose.Schema({
        nome: {
            type: "String",
            required: true,
        },
        numero: {
            type: Number,
            required: true,
        },
        limiteDaCategoria: {
            type: Number,
            required: true,
        },
        comprovantePadrao: {
            type: "String",
            required: true,
        }
 })
    return mongoose.model("Categoria", CategoriaSchema);
}();