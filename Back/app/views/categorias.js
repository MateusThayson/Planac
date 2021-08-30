function render(categoria){
    return {
        id_categoria: categoria._id,
        nome: categoria.nome,
        numero: categoria.numero,
        comprovantePadrao: categoria.comprovantePadrao,
    }
}

module.exports.render = render;

function renderMany(categorias){
    return categorias.map(render);
}

module.exports.renderMany = renderMany;