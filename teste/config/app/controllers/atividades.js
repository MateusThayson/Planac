const Atividade = require("../models/atividades");
const jwt = require("jsonwebtoken");

module.exports.planejarAtividade = function(req, res){
    let categoria = req.body.categoria;
    let nome = req.body.nome;
    let data = req.body.data;
    let horario = req.body.horario;
    let comcomprovante = req.body.comcomprovante;
    let comcadastro = req.body.comcadastro;


    let token = req.headers.token;
    let payload = jwt.decode(token);
    let aluno_logado = payload.id;

    let promise = Atividade.create({categoria: categoria, nome: nome, data: data, horario: horario, 
        comcomprovante: comcomprovante, comcadastro: comcadastro, aluno: aluno_logado});
    console.log(promise);
    promise.then(function(atividade){
        res.status(201).json(viewPost.render(atividade));
    }).catch(function(error){
        res.status(500).json({mensagem: "Deu erro!"});
    });
}