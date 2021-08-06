const Atividade = require("../models/atividade");
const viewAtividade = require("../views/atividades");
const jwt = require("jsonwebtoken");
const atividade = require("../models/atividade");

// Métodos da classe Atividade:
// * Planejar atividade
// * Listar atividades
// * Listar atividades por id
// * Excluir atividade

module.exports.planejarAtividade = function(req, res){

    // Atributos da classe Atividade.
    
    let categoria = req.body.categoria;
    let nome = req.body.nome;
    let data = req.body.data;
    let horario = req.body.horario;
    let comcomprovante = req.body.comcomprovante;
    let comcadastro = req.body.comcadastro;
// -------------------------------------------------------------------------------------------------------------

// Ao planejar uma atividade, o sistema detecta o aluno logado através do token e atribui seu id a atividade. 
// Cada atividade no banco está atribuida a um aluno.

    let token = req.headers.token;
    let payload = jwt.decode(token);
    let aluno_logado = payload.id;

    let promise = Atividade.create({categoria: categoria,
                                    nome: nome,
                                    data: data,
                                    horario: horario, 
                                    comcomprovante: comcomprovante,
                                    comcadastro: comcadastro,
                                    aluno: aluno_logado
                                });

    console.log(promise);
    promise.then(function(atividade){
        res.status(201).json(viewAtividade.render(atividade));
    }).catch(function(error){
        res.status(500).json({mensagem: "Não foi possível planejar sua atividade!"});
    });
}

// * Listar atividades do Aluno

module.exports.listarAtividadeDoAluno = function(req, res){
    let promise = Atividade.find().exec();
    promise.then(function(atividades){
       res.status(200).json(viewAtividades.renderMany(atividades));
    }).catch(function(error){
       res.status(500).json({mensagem:"Atividade não encontrada!"})
       console.log(error)
    })
}

// * Listar atividades por id

module.exports.listarAtividadePorId= function(req, res){
    let id = req.params.id;
    let promise = Atividade.findById(id).exec();
    promise.the(function(atividade){
        res.status(200).json(view.render(atividade));
    }).catch(function(error){
        res.status(400).json({mensagem: "Não encontramos essa atividade!"})
    });
}    

// * Excluir atividade

module.exports.excluirAtividade = function(req, res){
    let id = req.params.id;
    let token = req.headers.token;
    let payload = jwt.decode(token);
    let aluno_logado = payload.id;

    let promise = Atividade.findById(id).exec();
    
        promise.then(function(post){
            if(aluno_logado == atividade.usuario){
                post.remove(id);
                res.status(200).json({mensagem:"Atividade excluida!"});
            }else{
                res.status(400).json({mensagem: "Erro!"});
            }
        })
    }
