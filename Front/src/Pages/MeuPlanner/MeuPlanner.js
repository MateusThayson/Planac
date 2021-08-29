import Menu from "../Components/Menu/Menu"
import 'react-calendar/dist/Calendar.css'
import Calendar from 'react-calendar';
import { useState, useContext } from "react";
import "./MeuPlanner.css"
import { AppContext } from "../../App";

function Calendario(){
    const app = useContext(AppContext)
    console.log(app.date);
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

function AtividadesPlanejadas(){
    return(
        <div className="boxContainer">
            <h3 className="titulo">Atividades Planejadas</h3>
            <CardAtividadePlanejada></CardAtividadePlanejada>
            <CardAtividadePlanejada></CardAtividadePlanejada>
        </div>
    )
}

function Icones(){
    return(
        <div className="iconesContainer">
            <div className="container">
                <div className="icone"></div>
                <div className="icone"></div>          
            </div>
        </div>
    )
}
export default function MeuPlanner(){
    const app = useContext(AppContext);
    let dia = " em " + app.date.Dia;
    let ano = " de " + app.date.Ano;
    console.log(app);
    return(
        <div>
            <Menu></Menu>
            <h1>Meu Planner</h1>
            <div className="container">
                <Calendario></Calendario>
                <AtividadesPlanejadas Dia={dia} Mes={ano}></AtividadesPlanejadas>
                <Icones></Icones>
            </div>
        </div>
    )
}