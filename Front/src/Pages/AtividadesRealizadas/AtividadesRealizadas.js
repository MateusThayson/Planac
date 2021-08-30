import "./AtividadesRealizadas.css"
import Menu from "../Components/Menu/Menu"
import { Link } from "react-router-dom";
import Grafico from "./Grafico";
import Card from "./Card";

function MeuProgressoGeral() {
    return (
        <div className="boxContainer">
            <h3 className="tituloBox">Meu Progresso Geral</h3>
            <div className="graph">
                <Grafico className="graficoChartProgressoGeral" full="196" half="86" colorone="#010505" colortwo="#00F190" legend="label"></Grafico>
            </div>
            <Link to="/atividadesrealizadas/meuprogressogeral" className="botao">Ver Atividades</Link>
        </div>
    )
}

function MeuProgressoPorCategoria() {
    return (
        <div className="boxContainer">
            <h3 className="tituloBox">Meu Progresso Por Categoria</h3>
            <br></br>
            <div className="cardGroup">
                <Card title="Atividades de iniciação acadêmica" number="I" full="187" half="87" color="coral"></Card>
                <Card title="Atividades de iniciação acadêmica" number="II" full="187" half="87" color="cadetblue"></Card>
                <Card title="Atividades de iniciação acadêmica" number="III" full="187" half="87" color="cadetblue"></Card>
                <Card title="Atividades de iniciação acadêmica" number="II" full="187" half="87" color="cadetblue"></Card>
                <Card title="Atividades de iniciação acadêmica" number="I" full="187" half="87" color="coral"></Card>
            </div>
        </div>
    )

}

export default function AtividadesRealizadas() {
    return (
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