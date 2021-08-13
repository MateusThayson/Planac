const Categoria = require("../models/categoria");
const viewCategoria = require("../views/categorias");

module.exports.inserirCategoria = function(req, res){
    let nome = req.body.nome;

    let promise = Categoria.create({nome: nome});

    promise.then(function(categoria){
        res.status(201).json(viewCategoria.render(categoria));
    }).catch(function(error){
        res.status(500).json({mensagem: "Erro ao cadastrar categoria!"});
    });

}

module.exports.listarCategorias = function(req, res){    
    let promise = Categoria.find().exec();

    promise.then(function(categorias){
        res.status(200).json(viewCategoria.renderMany(categorias));
    }).catch(function(error){
        res.status(400).json({mensagem: "Erro ao visualizar categorias!"});
    });
}

module.exports.buscarCategoriaPorId = function(req, res){
    let id = req.params.id;   
    let promise = Categoria.findById(id);        
    promise.then(function(categoria){
        res.status(200).json(viewCategoria.render(categoria));
    }).catch(function(error){
        res.status(400).json({mensagem: "Erro ao visualizar categoria!"});
    });
}

module.exports.editarCategoria = function(req, res){
    let id = req.params.id;
    let promise = Categoria.findByIdAndUpdate(id, req.body, {new: false}).exec();
    promise.then(function(categoria){
        res.status(200).json({mensagem: "Categoria atualizada com sucesso!"});
    }).catch(function(error){
        res.status(400).json({mensagem: "Erro ao editar categoria!"});
    });
}

module.exports.excluirCategoria = function(req, res){
    let id = req.params.id;
    let promise = Categoria.findByIdAndRemove(id).exec();    
    promise.then(function(){
        res.status(200).json({mensagem: "Categoria excluida com sucesso!"});
    }).catch(function(error){
        res.status(400).json({mensagem: "Erro ao excluir categoria!"});
    });
}
