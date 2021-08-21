const Atividade = require("../models/atividade");
const viewAtividade = require("../views/atividades");
const jwt = require("jsonwebtoken");

module.exports.planejarAtividade = function(req, res){
    
    let categoria = req.body.categoria;
    let nome = req.body.nome;
    let data = req.body.data;
    let horario = req.body.horario;

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
        console.log(error);
    });
}

module.exports.buscarAtividadePorId = function(req, res){
    let id = req.params.id;
    let token = req.headers.token;
    let payload = jwt.decode(token);
    let aluno_logado = payload.id;
    
    let promise = Atividade.findById(id).populate({path: 'categoria', select:['nome']}).populate({path: 'aluno', select:['nome']});
    promise.then(function(atividade){
        if(aluno_logado == atividade.aluno, atividade.cadastrada_no_sisac == false){
            res.status(200).json(viewAtividade.render(atividade));
        }else{
            res.status(400).json({mensagem: "Erro ao buscar atividade!"});
        }      
    }).catch(function(error){
        res.status(400).json({mensagem: "Atividade não encontrada!"});
    });        
}

module.exports.listarAtividadesCadastradas = function(req, res){
    let token = req.headers.token;
    let payload = jwt.decode(token);
    let aluno_logado = payload.id;    
    let promise = Atividade.find({aluno: aluno_logado, cadastrada_no_sisac: true}).populate({path: 'categoria', select:['nome']}).populate({path: 'aluno', select:['nome']});

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
    let promise = Atividade.find({aluno: aluno_logado, cadastrada_no_sisac: true, categoria: id}).populate({path: 'categoria', select:['nome']}).populate({path: 'aluno', select:['nome']});

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
    let promise = Atividade.find({aluno:aluno_logado, comprovante: true, cadastrada_no_sisac: false}).populate({path: 'categoria', select:['nome']}).populate({path: 'aluno', select:['nome']});

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
    let promise = Atividade.find({aluno:aluno_logado, comprovante: false, cadastrada_no_sisac: false}).populate({path: 'categoria', select:['nome', 'comprovantePadrao']}).populate({path: 'aluno', select:['nome']});

    promise.then(function(atividades){
        res.status(200).json(viewAtividade.renderMany(atividades));
    }).catch(function(error){
        res.status(400).json({mensagem: "Erro ao listar atividades sem comprovante!"});
        console.log(error);
    });
}

module.exports.listarAtividadesPlanejadas = function(req, res){
    let token = req.headers.token;
    let payload = jwt.decode(token);
    let aluno_logado = payload.id;    
    let promise = Atividade.find({aluno:aluno_logado, cadastrada_no_sisac: false}).populate({path: 'categoria', select:['nome', 'comprovantePadrao']}).populate({path: 'aluno', select:['nome']});

    promise.then(function(atividades){
        res.status(200).json(viewAtividade.renderMany(atividades));
    }).catch(function(error){
        res.status(400).json({mensagem: "Erro ao listar atividades planejadas!"});
        console.log(error);
    });
}


module.exports.buscarAtividadePorNome = function(req, res){
    let nome = req.body.nome;
    let token = req.headers.token;
    let payload = jwt.decode(token);
    let aluno_logado = payload.id;

    let promise = Atividade.findOne({aluno:aluno_logado, nome: nome, cadastrada_no_sisac: false}).populate({path: 'categoria', select:['nome']}).populate({path: 'aluno', select:['nome']});
    promise.then(function(atividade){
        res.status(200).json(viewAtividade.render(atividade));        
    }).catch(function(error){
        res.status(400).json({mensagem: "Atividade não encontrada!"});
    }); 
}

module.exports.editarAtividade = function(req, res){
    let id = req.params.id;
    let token = req.headers.token;
    let payload = jwt.decode(token);
    let aluno_logado = payload.id;

    let promise = Atividade.findByIdAndUpdate(id, req.body, {new: false});
    promise.then(function(atividade){
        res.status(200).json({mensagem: "Atividade editada com sucesso!"});               
    }).catch(function(error){
        res.status(400).json({mensagem: "Erro ao editar atividade!"});
    });
}

module.exports.adicionarComprovante = function(req, res){
    let id = req.params.id;
    let token = req.headers.token;
    let payload = jwt.decode(token);
    let aluno_logado = payload.id;

    let promise = Atividade.findByIdAndUpdate(id, {"comprovante": true}, {new: false});
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

    let promise = Atividade.findById(id);
    promise.then(function(atividade){
        if(aluno_logado == atividade.aluno, atividade.cadastrada_no_sisac == false){
            atividade.remove(id);
            res.status(200).json({mensagem:"Atividade excluida!"});
        }else{
            res.status(400).json({mensagem: "Erro ao excluir atividade!"});
        }      
    }).catch(function(error){
        res.status(400).json({mensagem: "Erro ao excluir atividade!"});
    });
}


      
