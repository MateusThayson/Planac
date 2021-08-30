import "./Menu.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../../App";

export default function Menu(){

    const {setAuth} = useContext(AppContext);

    return(
        <nav className="menu">
            <div class="imagem"><img src="../../../logo.svg" alt=""></img></div>
            <div className="tb">
<<<<<<< HEAD
                <NavLink className="botao" to="/atividadesrealizadas">Atividades realizadas</NavLink>
                <NavLink className="botao" to="/meuplanner">Meu planner</NavLink>
                <NavLink className="botao" to="/planosemestral">Plano semestral</NavLink>
=======
                <NavLink className="botaoMenu" to="/atividadesrealizadas">Atividades realizadas</NavLink>
                <NavLink className="botaoMenu" to="/meuplanner">Meu planner</NavLink>
                <NavLink className="botaoMenu" to="/planosemestral">Plano semestral</NavLink>
>>>>>>> 5024f1f82b7f7f40410bea0c9e9781fd366aba3f
                <div className="sair" onClick={()=>{setAuth({token:null, name:null})}}>Sair</div>
            </div>
        </nav>
    )
}