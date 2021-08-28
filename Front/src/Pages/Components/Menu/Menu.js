import "./Menu.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../App";

export default function Menu(){

    const {setAuth} = useContext(AuthContext);

    return(
        <nav className="menu">
            <div class="imagem"><img src="../../../logo.svg" alt=""></img></div>
            <div className="tb">
                <NavLink className="botao" to="/atividadesrealizadas">Atividades realizadas</NavLink>
                <NavLink className="botao" to="/meuplanner">Meu planner</NavLink>
                <NavLink className="botao" to="/planosemestral">Plano semestral</NavLink>
                <div className="sair" onClick={()=>{setAuth({token:null, name:null})}}>Sair</div>
            </div>
        </nav>
    )
}