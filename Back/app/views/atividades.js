function render(atividade){
    return {
        id_atividade: atividade._id,
        categoria: atividade.categoria,
        nome_da_atividade: atividade.nome,
        data: atividade.data,
        horario: atividade.horario,
        comprovante: atividade.comprovante,
        aluno: atividade.aluno,
    }
}

module.exports.render = render;

function renderMany(atividades){
    return atividades.map(render);
}

module.exports.renderMany = renderMany;