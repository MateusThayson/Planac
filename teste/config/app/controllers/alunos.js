const Aluno = require("../models/aluno");
const viewAluno = require("../views/alunos");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


module.exports.inserirAluno = function(req, res){
    let aluno = {
        nome: req.body.nome,
        matricula: req.body.matricula,
        senha: bcrypt.hashSync(req.body.senha, 10),
    }
    let promise = Aluno.create(aluno);
    promise.then(function(aluno){
        res.status(200).json(viewAluno.render(aluno));
    }).catch(function(error){
        res.status(400).json({mensagem: "Sua requisição não funcionou."});
    })
}



