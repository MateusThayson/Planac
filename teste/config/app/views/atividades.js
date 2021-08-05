function render(atividade){
    return {
        categoria: atividade.categoria,
        nome: atividade.nome,
        data: atividade.data,
        horario: atividade.horario,
        comcadastro: atividade.comcadastro,
        comcomprovante: atividade.comcomprovante,

    }
}

module.exports.render = render;

function renderMany(atividades){
    return atividades.map(render);
}

module.exports.renderMany = renderMany;