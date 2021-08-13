function render(categoria){
    return {
        id_categoria: categoria._id,
        nome: categoria.nome,
    }
}

module.exports.render = render;

function renderMany(categorias){
    return categorias.map(render);
}

module.exports.renderMany = renderMany;