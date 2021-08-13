function render(aluno){
    return {
        id_aluno: aluno._id,
        nome: aluno.nome,
        matricula: aluno.matricula,
    }
}

module.exports.render = render;

function renderMany(alunos){
    return alunos.map(render);
}

module.exports.renderMany = renderMany;