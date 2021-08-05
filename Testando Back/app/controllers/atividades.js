const Atividade = require("../models/atividade");
const viewAtividade = require("../views/atividades");
const jwt = require("jsonwebtoken");

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