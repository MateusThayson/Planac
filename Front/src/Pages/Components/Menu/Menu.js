import "./Menu.css";

export default function Menu(){
    return(
        <div class="menu">
            <div class="imagem">
                <img src="Tipografia Branca.png" alt=""></img>
            </div>
        
            <div class="botoes"> 
                <a href=""><button class="planner">Meu planner</button></a> 
                <a href=""><button class="plano_semestral">Plano semestral</button></a>
                <div class="dropdown">
                    <button class="perfil">Meu Perfil</button>   
                    <div class="conteudo-drop"></div>
                </div>
                <div class="sair">
                    <button class="finalizar-button">Sair</button>
                </div>  
            </div>
        
        </div>
    )
}