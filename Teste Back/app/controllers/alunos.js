const Aluno = require("../models/aluno");
const viewAluno = require("../views/alunos");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


// Métodos da classe Aluno:
// * Cadastrar Aluno

module.exports.cadastrarAluno = function(req, res){

    // Atributos da classe Aluno.
    let aluno = {
        nome: req.body.nome,
        matricula: req.body.matricula,
        senha: bcrypt.hashSync(req.body.senha, 10),
    }
// -------------------------------------------------------------------------------------------------------------

    let promise = Aluno.create(aluno);
    promise.then(function(aluno){
        res.status(200).json(viewAluno.render(aluno));
    }).catch(function(error){
        res.status(400).json({mensagem: "Não foi possível cadastrar o aluno."});
    })
}

// * Buscar Aluno Por Matricula 

module.exports.buscarAlunoPorMatricula = function(req,res){
    let matricula = req.params.matricula;
    let promise = Aluno.findById(matricula).exec();
    promise.then(function(aluno){
      res.status(200).json(view.render(aluno));
    }).catch(function(error){
      res.status(400).json({mensagem: "Aluno não encontrado!", error: error})
    });
  }


