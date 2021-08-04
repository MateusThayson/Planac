const Comentario = require("../models/comentario");
const viewComentario = require("../views/comentarios");
const jwt = require("jsonwebtoken");


module.exports.inserirComentario = function(req, res){
    let texto = req.body.texto;
    let post = req.body.post;

    let token = req.headers.token;
    let payload = jwt.decode(token);
    let id_usuario_logado = payload.id;

    let promise = Comentario.create({texto: texto, post: post, usuario: id_usuario_logado});
    promise.then(function(comentario){
        res.status(201).json(viewComentario.render(comentario));
    }).catch(function(error){
        res.status(500).json({mensagem: "Deu erro!"});
    })
}

module.exports.listarComentarios = function(req, res){
    let promise = Comentario.find().exec();
    promise.then(function(comentarios){
        res.status(200).json(comentarios);
    }).catch(function(error){
        res.status(500).json({mensagem: "Deu erro!"});
    })
}

module.exports.removerComentario = function(req, res){
    let id = req.params.id;
    let token = req.headers.token;
    let payload = jwt.decode(token);
    let id_usuario_logado = payload.id;

    let promise = Comentario.findById(id);

    promise.then(function(comentario){
        if(id_usuario_logado == comentario.usuario){
            comentario.remove(id);
            res.status(200).json({mensagem:"Comentário deletado!"});
        }else{
            res.status(400).json({mensagem: "Só é permitido deletar os seus comentários!"});
        }
    })
}