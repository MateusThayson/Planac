const viewUsuario = require("../views/usuarios");
const viewPost = require("../views/posts");


function render(comentario){
    return {
        texto: comentario.texto,
        post: viewPost.render(comentario.post),
        usuario: viewUsuario.render(comentario.usuario),
    }
}

module.exports.render = render;

function renderMany(comentarios){
    return comentarios.map(render);
}

module.exports.renderMany = renderMany;