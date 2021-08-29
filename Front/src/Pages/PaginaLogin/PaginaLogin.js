import "./PaginaLogin.css";
import { useForm } from "react-hook-form";
import history from "../../history";
import { login } from "../../api/auth";
import logo from "./LogoPrincipal.png";
import React, { useContext, useState } from "react";
import { AppContext } from "../../App";

function FormularioLogin(){
    
    const {register, handleSubmit} = useForm();

    const [matricula, setMatricula] = useState('');
    const [senha, setSenha] = useState('');


    const auth = useContext(AppContext);

    const logar = (loginDados) =>{
        login(loginDados).then((response)=>{
            auth.setAuth({token: response.data.token, nome: response.data.nome});
            history.push("/atividadesrealizadas");
        }).catch((error)=>{
            console.log(error);
        })
    };

    const mostrar = (e) => {
        e.preventDefault();
        console.log(matricula, senha)
    }

    return (
        <form className="formLogin" onSubmit={e=>mostrar(e)}>
            <img src={logo} alt="logo planac" className="logo"/>
            <h3>Matrícula:</h3> 
            <input className="input" placeholder="000000" type="text" name="matricula" {...register('matricula', { required: true})} onChange={e => setMatricula(e.target.value)}/>
            <br/>
            <h3>Senha:</h3>
            <input className="input" placeholder="********" type="password" name="senha" {...register('senha', { required: true})} onChange={e => setSenha(e.target.value)}/>
            <br/>
            <button className="entrar">Entrar</button>
            <br/>

            <a href="atividadesrealizadas" class="helpText"> Não sabe qual sua matrícula? </a>
        </form>
    )
}

export function PaginaLogin(){
    return(
        <div className="container"> 
            <div className="boxLogin">
                <FormularioLogin></FormularioLogin>
            </div>
        </div>
    )
}