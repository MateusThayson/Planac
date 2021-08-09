import "./PaginaLogin.css"
export default function PaginaLogin(){
    return(
        <div className="container"> 
            <div className="boxContainer">
                <form className="formLogin">
                        <img src="LogoPrincipal.png" alt="Planac Logo"></img>
                        <h3>Matrícula:</h3>
                        <input type="text" name="matrícula" className="input"></input>
                        <h3>Senha:</h3>
                        <input type="password" name="senha" className="input"></input>
                        
                </form>
                <button className="entrar">Entrar</button>
            </div>
        </div>
    )
}