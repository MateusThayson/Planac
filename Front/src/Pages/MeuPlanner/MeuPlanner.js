import Menu from "../Components/Menu/Menu"
import 'react-calendar/dist/Calendar.css'
import Calendar from 'react-calendar';
import {  useContext } from "react";
import "./MeuPlanner.css"
import { AppContext } from "../../App";

function Calendario(){
    const app = useContext(AppContext)
    const exibirData = (valor) => {
        const val = valor.toString();
        const info = val.split(" ");
        app.setDate({Mes: info[1], Dia: info[2], Ano: info[3]})
    }
    return(
        <div className="boxContainer calendario">
            <Calendar
                onChange={(valor) => exibirData(valor)}
                minDetail = "year"
                next2Label= {null}
                prev2Label= {null}
            />
        </div>
    )
}

function CardAtividadePlanejada(){
    return(
        <div className="cardAtividadePlanejada">
            <div className="categoria">
                <span className="romanoCategoria"> II</span>
            </div>

            <label class="checkboxComprovante">
                    <input type="checkbox"/>
                    <div className="checkboxCustom"></div>
            </label>
            <div className="titulo">
                <span className="tituloAtividade">Aula de pah</span><br/>        
            </div>

            <div className="diaEHorario">
                  <span className="dia">seg 5</span><br/> 
                <span className="horario">09:00</span>    
            </div>

        </div>
    )
}

function AtividadesPlanejadas( ){
    const app = useContext(AppContext);
    let dia = " " ;
    let mes = " ";
    if(app.date.Dia != null){
        dia = " em " + app.date.Dia;
        mes = " de " + app.date.Mes;
    }
    return(
        <div className="boxContainer">
            <h3 className="titulo">Atividades Planejadas {dia} {mes}</h3>
            <CardAtividadePlanejada></CardAtividadePlanejada>
            <CardAtividadePlanejada></CardAtividadePlanejada>
        </div>
    )
}
/**
 * <a href="https://imgbb.com/"><img src="https://i.ibb.co/18wh9FX/add.png" alt="add" border="0"></a> <a href="https://imgbb.com/"><img src="https://i.ibb.co/7Rq3X0w/checklist.png" alt="checklist" border="0"></a> <a href="https://imgbb.com/"><img src="https://i.ibb.co/j5d3T54/list.png" alt="list" border="0"></a>
 */
export function IconeTemplate({source, alt}){
    return(
        <button className="icone">
            <img src={source} alt={alt} className="logo"/>
        </button>
    )
}

function Icones(){
    return(
        <div className="iconesContainer">
            <div className="container">

                <IconeTemplate source="https://i.ibb.co/7Rq3X0w/checklist.png" alt="checklist" ></IconeTemplate>                
                <IconeTemplate source="https://i.ibb.co/18wh9FX/add.png" alt="adicionar atividade"></IconeTemplate>

            </div>
        </div>
    )
}

function PlanejarAtividade(){
    return(
        <div className="boxContainer planejarAtividade">
            <h3 className="titulo">Planejar Atividade Complementar</h3>
            <span> Nome da atividade:</span>
            <input type="text" className="nomeAtividade"></input>
            <span>Categoria da atividade:</span>
            <div className="categorias">
                <div className="categoriaRomano">I</div>
                <div className="categoriaRomano">II</div>
                <div className="categoriaRomano">II</div>
                <div className="categoriaRomano">IV</div>
                <div className="categoriaRomano">V</div>
                <div className="categoriaRomano">VI</div>
                <div className="categoriaRomano">VII</div>
            </div>
            <span>Tipo de ativade:</span>
            <div className="tipoBox">
                <div className="tipoTexto"> lorum lorum lorum lorum</div>
                <div className="tipoTexto"> lorum lorum lorum lorum</div>
                <div className="tipoTexto"> lorum lorum lorum lorum</div>
                <div className="tipoTexto"> lorum lorum lorum lorum</div>
            </div>
        </div>
        
    )
}
export default function MeuPlanner(){

    return(
        <div>
            <Menu></Menu>
            <h1>Meu Planner</h1>
            <div className="container">
                <Calendario></Calendario>
                <PlanejarAtividade></PlanejarAtividade>
                <Icones></Icones>
            </div>
        </div>
    )
}