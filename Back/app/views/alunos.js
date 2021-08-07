function render(aluno){
    return {
        id: aluno._id,
        matricula: aluno.matricula,
        nome: aluno.nome,
    }
}

module.exports.render = render;

function renderMany(alunos){
    return alunos.map(render);
}

module.exports.renderMany = renderMany;