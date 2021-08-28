import "./PaginaLogin.css";
import { useForm } from "react-hook-form";
import history from "../../history";
import { login } from "../../api/auth";
import logo from "./LogoPrincipal.png";
import { useContext } from "react";
import { AuthContext } from "../../App";

function FormularioLogin(){

    const {register, handleSubmit} = useForm();

    const auth = useContext(AuthContext);

    const logar = (loginDados) =>{
        login(loginDados).then((response)=>{
            auth.setAuth({token: response.data.token, nome: response.data.nome});
            history.push("/atividadesrealizadas");
        }).catch((error)=>{
            console.log(error);
        })
    };
    return (
        <form className="formLogin" onSubmit={handleSubmit(logar)}>
            <h3>Matrícula:</h3> 
            <input className="input" placeholder="000000" type="text" name="matricula" {...register('matricula', { required: true})}/> <br/>
            <h3>Senha:</h3>
            <input className="input" placeholder="********" type="password" name="senha" {...register('senha', { required: true})}/> <br/>
            <button className="entrar">Entrar</button>
            <br/> <a href="atividadesrealizadas"> Não sabe qual sua matrícula? </a>
        </form>
    )
}

export function PaginaLogin(){
    return(
        <div className="container"> 
            <div className="boxLogin">
            <img src={logo} alt="logo planac" className="logo"/>
                <FormularioLogin></FormularioLogin>
            </div>
        </div>
    )
}