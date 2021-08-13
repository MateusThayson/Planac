const Atividade = require("../models/atividade");
const Categoria = require("../models/categoria");
const viewAtividade = require("../views/atividades");
const viewCategoria = require("../views/categorias");
const jwt = require("jsonwebtoken");

// Métodos da classe Atividade:
// * Planejar atividade
// * Listar atividades do Aluno
// * Buscar atividades por id
// * Excluir atividade
// * Listar atividades cadastradas
// * Listar atividades cadastradas por categoria
// * Listar atividades com comprovante
// * Listar atividades sem comprovante
// * Buscar atividades por nome
// * Editar atividade
// * Adicionar comprovante
// *Excluir atividade

module.exports.planejarAtividade = function(req, res){
    
    let categoria = req.body.categoria;
    let nome = req.body.nome;
    let data = req.body.data;
    let horario = req.body.horario;
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
                                    aluno: aluno_logado
                                });

    promise.then(function(atividade){
        res.status(201).json(viewAtividade.render(atividade));
    }).catch(function(error){
        res.status(500).json({mensagem: "Erro ao planejar atividade!"});
    });
}

// module.exports.listarAtividadesDoAluno = function(req, res){
//     let token = req.headers.token;
//     let payload = jwt.decode(token);
//     let aluno_logado = payload.id;    
//     let promise = Atividade.find({aluno:aluno_logado}).populate('categoria');

//     promise.then(function(atividades){
//         res.status(200).json(viewAtividade.renderMany(atividades));
//     }).catch(function(error){
//         res.status(400).json({mensagem: "Erro ao listar atividades!"});
//     });
// }

// module.exports.buscarAtividadePorId = function(req, res){
//     let id = req.params.id;
//     let token = req.headers.token;
//     let payload = jwt.decode(token);
//     let aluno_logado = payload.id;
    
//     let promise = Atividade.findById(id).populate('categoria');        
//     promise.then(function(atividade){
//         if(aluno_logado == atividade.aluno){
//             res.status(200).json(viewAtividade.render(atividade));
//         }else{
//             res.status(400).json({mensagem: "Erro ao buscar atividade!"});
//         }
//     })
// }

module.exports.listarAtividadesCadastradas = function(req, res){
    let token = req.headers.token;
    let payload = jwt.decode(token);
    let aluno_logado = payload.id;    
    let promise = Atividade.find({aluno: aluno_logado, com_cadastro: true});

    promise.then(function(atividades){
        res.status(200).json(viewAtividade.renderMany(atividades));
        }).catch(function(error){
            res.status(400).json({mensagem: "Erro ao listar atividades cadastradas!"});
        });
}

module.exports.listarAtividadesCadastradasPorCategoria = function(req, res){
    let id = req.params.id;
    let token = req.headers.token;
    let payload = jwt.decode(token);
    let aluno_logado = payload.id;    
    let promise = Atividade.find({aluno: aluno_logado, com_cadastro: true, categoria: id});

    promise.then(function(atividades){
        res.status(200).json(viewAtividade.renderMany(atividades));
        }).catch(function(error){
            res.status(400).json({mensagem: "Erro ao listar atividades cadastradas por categoria!"});
        });
}

module.exports.listarAtividadesComComprovante = function(req, res){
    let token = req.headers.token;
    let payload = jwt.decode(token);
    let aluno_logado = payload.id;    
    let promise = Atividade.find({aluno:aluno_logado, com_comprovante: true});

    promise.then(function(atividades){
        res.status(200).json(viewAtividade.renderMany(atividades));
        }).catch(function(error){
            res.status(400).json({mensagem: "Erro ao listar atividades com comprovante!"});
        });
}

module.exports.listarAtividadesSemComprovante = function(req, res){
    let token = req.headers.token;
    let payload = jwt.decode(token);
    let aluno_logado = payload.id;    
    let promise = Atividade.find({aluno:aluno_logado, com_comprovante: false});

    promise.then(function(atividades){
        res.status(200).json(viewAtividade.renderMany(atividades));
        }).catch(function(error){
            res.status(400).json({mensagem: "Erro ao listar atividades sem comprovante!"});
        });
}

module.exports.buscarAtividadePorNome = function(req, res){
    let nome = req.body.nome;

    let token = req.headers.token;
    let payload = jwt.decode(token);
    let aluno_logado = payload.id;

    let promise = Atividade.findOne({nome: nome}).populate('categoria');
    promise.then(function(atividade){
        res.status(200).json(viewAtividade.render(atividade));
    }).catch(function(error){
        res.status(400).json({mensagem: "Erro ao buscar atividade!"});
    }); 
}

module.exports.editarAtividade = function(req, res){
    let id = req.params.id;
    let promise = Atividade.findByIdAndUpdate(id, req.body, {new: false}).exec();
    promise.then(function(atividade){
        res.status(200).json({mensagem: "Atividade atualizada com sucesso!"});
    }).catch(function(error){
        res.status(400).json({mensagem: "Erro ao editar atividade!"});
    });
}

module.exports.adicionarComprovante = function(req, res){
    let id = req.params.id;
    let promise = Atividade.findByIdAndUpdate(id, {"com_comprovante": true}, {new: false}).exec();
    promise.then(function(atividade){
        res.status(200).json({mensagem: "Comprovante adicionado!"});
    }).catch(function(error){
        res.status(400).json({mensagem: "Erro ao adicionar comprovante!"});
    });
}

module.exports.excluirAtividade = function(req, res){
    let id = req.params.id;
    let token = req.headers.token;
    let payload = jwt.decode(token);
    let aluno_logado = payload.id;

    let promise = Atividade.findById(id).exec();
    
    promise.then(function(atividade){
        if(aluno_logado == atividade.aluno){
            atividade.remove(id);
            res.status(200).json({mensagem:"Atividade excluida!"});
        }else{
            res.status(400).json({mensagem: "Erro ao excluir atividade!"});
        }
    })
}


      
