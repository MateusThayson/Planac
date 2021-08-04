const Post = require("../models/posts");
const Comentario = require("../models/comentario");
const viewPost = require("../views/posts");
const viewComentario = require("../views/comentarios");
const jwt = require("jsonwebtoken");

module.exports.inserirPost = function(req, res){
    let texto = req.body.texto;
    let likes = req.body.likes;

    let token = req.headers.token;
    let payload = jwt.decode(token);
    let id_usuario_logado = payload.id;

    let promise = Post.create({texto: texto, likes: likes, usuario: id_usuario_logado});
    console.log(promise);
    promise.then(function(post){
        res.status(201).json(viewPost.render(post));
    }).catch(function(error){
        res.status(500).json({mensagem: "Deu erro!"});
    });
}

module.exports.listarPosts = function(req, res){
    let promise = Post.find().exec();
    promise.then(function(posts){
        res.status(200).json(viewPost.renderMany(posts));
    }).catch(function(error){
        res.status(500).json({mensagem: "Sua requisição não funcionou!"})
    })
}


module.exports.buscarPostPorId = function(req, res){
    let id = req.params.id;
    let promise = Post.findById(id).exec();
    promise.then(function(post){
        res.status(200).json(viewPost.render(post))
    }).catch(function(error){
        res.status(404).json({mensagem: "Sua requisição não funcionou!", error:error})
    })
}

module.exports.obterComentarios = function(req, res){
    let id = req.params.id;
    let promise = Comentario.find({post:id}).exec();
    promise.then(function(comentarios){
        res.status(200).json(viewComentario.renderMany(comentarios));
    }).catch(function(error){
        res.status(400).json({mensagem: "Sua requisição não funcionou!"});
    })
}

module.exports.removerPost = function(req, res){
    let id = req.params.id;
    let token = req.headers.token;
    let payload = jwt.decode(token);
    let id_usuario_logado = payload.id;

    let promise = Post.findById(id).exec();
    
        promise.then(function(post){
            if(id_usuario_logado == post.usuario){
                post.remove(id);
                res.status(200).json({mensagem:"Post deletado!"});
            }else{
                res.status(400).json({mensagem: "Só é permitido deletar os posts de sua conta!"});
            }
        })
    }
    
                
        
           
