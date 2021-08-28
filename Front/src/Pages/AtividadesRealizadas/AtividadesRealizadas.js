import "./AtividadesRealizadas.css"
import Menu from "../Components/Menu/Menu"
import { Link } from "react-router-dom";

function MeuProgressoGeral(){
    return(
        <div className="boxContainer">
            <h3 className="tituloBox">Meu Progresso Geral</h3>
            <div className="graph">Horas cadastradas: <b>187</b> </div>
            <div className="horas">
                <p className="cargaHorariaTotal">Carga horaria total: <b>187h</b> </p>
                <p className="faltam">Faltam: <b>187h</b> </p>
            </div>
            <Link to="/atividadesrealizadas/meuprogressogeral" className="verAtividades">Ver Atividades</Link>
        </div>
    )
}

function CardCategoriaDeAtividade(){
    return(
        <div className="cardAtividade">
            <h3 className="nomeCategoria">Atividades de iniciação acadêmica</h3>
            <div className="romanoCategoria">I</div>
            <div className="graph">Horas cadastradas: <b>57</b></div>
            <div className="horas">
                <p className="limiteDaCategoria">Limite da categoria <b>187h</b> </p>
                <p className="possoAdicionar">Posso adicionar: <b>187h</b> </p>
            </div>
        </div>
    )
}
function MeuProgressoPorCategoria(){
    return(
        <div className="boxContainer">
            <h3 className="tituloBox">Meu Progresso Por Categoria</h3>
            <CardCategoriaDeAtividade></CardCategoriaDeAtividade>
        </div>
    )
    
}

export default function AtividadesRealizadas(){
    return(
        <div>
            <Menu></Menu>
            <h1>Atividades Realizadas</h1>
            <div className="container">
                <MeuProgressoGeral></MeuProgressoGeral>
                <MeuProgressoPorCategoria></MeuProgressoPorCategoria>
            </div>
        </div>
    )
}