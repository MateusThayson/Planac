import Menu from "../Components/Menu/Menu"
import 'react-calendar/dist/Calendar.css'
import Calendar from 'react-calendar';
import { useState } from "react";
import "./MeuPlanner.css"

function Calendario(){
    const [value, onChange] = useState(new Date());

    const exibirData = (valor) => {
        const val = valor.toString();
        const info = val.split(" ");
        const data = {Mes: info[1], Dia: info[2]}
        // exibirAtividade(data);
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
        <div>
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
            <h3>Atividades Planejadas em </h3>
            <CardAtividadePlanejada></CardAtividadePlanejada>
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
                <AtividadesPlanejadas></AtividadesPlanejadas>
            </div>
        </div>
    )
}