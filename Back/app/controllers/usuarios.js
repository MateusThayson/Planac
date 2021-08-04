const Usuario = require("../models/usuario");
const Post = require("../models/posts");
const viewUsuario = require("../views/usuarios");
const viewPost = require("../views/posts");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


module.exports.inserirUsuario = function(req, res){
    let usuario = {
        nome: req.body.nome,
        email: req.body.email,
        senha: bcrypt.hashSync(req.body.senha, 10),
    }
    let promise = Usuario.create(usuario);
    promise.then(function(usuario){
        res.status(200).json(viewUsuario.render(usuario));
    }).catch(function(error){
        res.status(400).json({mensagem: "Sua requisição não funcionou."});
    })
}

module.exports.listarUsuarios = function(req, res){
    let promise = Usuario.find().exec();
    promise.then(function(usuarios){
        res.status(200).json(viewUsuario.renderMany(usuarios));
    }).catch(function(error){
        res.status(500).json({mensagem: "Sua requisição não funcionou."});
    });
}

module.exports.buscarUsuarioPorId = function(req, res){
    let id = req.params.id;
    let promise = Usuario.findById(id).exec();
    promise.then(function(usuario){
        res.status(200).json(viewUsuario.render(usuario))
    }).catch(function(error){
        res.status(404).json({mensagem: "Sua requisição não funcionou!", error:error})
    })

}

module.exports.obterPost = function(req, res){
    let id = req.params.id;
    let promise = Post.find({usuario:id}).exec();
    promise.then(function(posts){
        res.status(200).json(viewPost.renderMany(posts));
    }).catch(function(error){
        res.status(400).json({mensagem: "Sua requisição não funcionou!"});
    })
}

module.exports.removerUsuario = function(req, res){
    let idpara = req.params.id;
    let token = req.headers.token;
    let payload = jwt.decode(token);
    let id_usuario_logado = payload.id;

    if(idpara == id_usuario_logado){
        let promise = Usuario.findByIdAndDelete(id_usuario_logado);
    promise.then(function(usuario){
        res.status(200).json(viewUsuario.render(usuario));
    }).catch(function(error){
        res.status(400).json({mensagem: "Sua requisição não funcionou."});
    }) 
    }else{
        res.status(400).json({mensagem: "Só é permitido deletar a sua conta de usuário."});
    }    
}


