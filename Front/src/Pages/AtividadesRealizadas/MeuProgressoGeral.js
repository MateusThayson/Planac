import Menu from "../Components/Menu/Menu"

function CardAtividadeRealizada(){
    return(
        <div classname="boxAtividadeRealizada">
            <div className="atividadeRealizada">
                <h2> titulo atividade</h2>
                <p className="professor">Professor: professor</p>
                <p className="horasComplementares"><b>2</b></p>
            </div>
        </div>
    )
}


export default function MeuProgressoGeral(){
    return(
        <div>
            <Menu></Menu>
            <h1>Atividades Realizadas</h1>
             <div className="boxContainer">
                <header>
                    <h3 className="tituloBox">Meu Progresso Geral</h3>
                    <div className="header">
                        <p>Lista de Atividades</p>
                        <p>Horas Cadastradas <b>tal hora</b> </p>
                    </div>
                </header>
                <CardAtividadeRealizada></CardAtividadeRealizada>
                <CardAtividadeRealizada></CardAtividadeRealizada>
            </div>
        </div>
    )
}      