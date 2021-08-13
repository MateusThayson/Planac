const Aluno = require("../models/aluno");
const viewAluno = require("../views/alunos");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Métodos da classe Aluno:
// * Cadastrar Aluno
// * Buscar aluno por matricula
// * Buscar Aluno por id
// * Buscar Aluno Logado
// * Listar Alunos
// *Editar Aluno
// *Excluir Aluno

module.exports.cadastrarAluno = function(req, res){

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

module.exports.buscarAlunoPorId = function(req,res){
    let id = req.params.id;
    let promise = Aluno.findById(id).exec();
    promise.then(function(aluno){
      res.status(200).json(viewAluno.render(aluno));
    }).catch(function(error){
      res.status(400).json({mensagem: "Aluno não encontrado!"})
    });
  }

module.exports.buscarAlunoLogado = function(req, res){
    let token = req.headers.token;
    let payload = jwt.decode(token);
    let aluno_logado = payload.id;

    let promise = Aluno.findOne({_id: aluno_logado}).exec();
    promise.then(function(aluno){
        res.status(200).json(viewAluno.render(aluno));
    }).catch(function(error){
        res.status(400).json({mensagem: "Erro!"});
    });
}

module.exports.listarAlunos = function(req, res){
    let promise = Aluno.find().exec();
    promise.then(function(alunos){
        res.status(200).json(viewAluno.renderMany(alunos));
    }).catch(function(error){
        res.status(400).json({mensagem: "Erro ao listar alunos!"});
    });
}

module.exports.editarAluno = function(req, res){
    let id = req.params.id;
    let promise = Aluno.findByIdAndUpdate(id, req.body, {new: false}).exec();
    promise.then(function(aluno){
        res.status(200).json({mensagem: "Dados do Aluno atualizados com sucesso!"});
    }).catch(function(error){
        res.status(400).json({mensagem: "Erro ao editar dados de aluno!"});
    });
}

module.exports.excluirAluno = function(req, res){
    let id = req.params.id;
    let promise = Aluno.findByIdAndRemove(id).exec();    
    promise.then(function(){
        res.status(200).json({mensagem: "Aluno removido!"});
    }).catch(function(error){
        res.status(400).json({mensagem: "Erro ao remover aluno!"});
    });
}
