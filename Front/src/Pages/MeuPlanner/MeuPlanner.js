import Menu from "../Components/Menu/Menu"

function Calendario(){
    return(
        <div className="boxContainer">
            <header>
                <p className="dataAtual">5 de Abril</p>
                <p className="mês">Abril</p>
                <p className="ano>">2021</p>
            </header>
            <div className="calendario">
                1 2 3 4
            </div>
        </div>
    )

}

function CardAtividadePlanejada(){
    return(
        <div class="boxContainer">
            <div className="romanoCategoria">II</div>
            <p className="tituloAtividade">Aula de pah</p>
            <div className="dia">seg 5</div>
            <p className="horarios">09:00/11:00</p> 
        </div>
    )
}

function AtividadesPlanejadas(){
    return(
        <div className="boxContainer">
            <h3>Atividades Planejadas X</h3>
            <Calendario></Calendario>
            <CardAtividadePlanejada></CardAtividadePlanejada>
        </div>
    )
}

export default function MeuPlanner(){
    return(
        <div>
            <Menu></Menu>
            <h1>Meu Planner</h1>
            <div className="Container">
                <Calendario></Calendario>
                <AtividadesPlanejadas></AtividadesPlanejadas>
            </div>
        </div>
    )
}