import React, { Component } from 'react'
import Grafico from './Grafico'

<<<<<<< HEAD
export class Card extends Component {
=======
export default class Card extends Component {
>>>>>>> 5024f1f82b7f7f40410bea0c9e9781fd366aba3f
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="cardAtividade" style={{background:this.props.color}}>

<<<<<<< HEAD
                <h3 className="nomeCategoria">{this.props.title}
                </h3>
=======
                <h4 className="nomeCategoria">{this.props.title}
                </h4>
>>>>>>> 5024f1f82b7f7f40410bea0c9e9781fd366aba3f
                <span className="romanoCategoria">
                    {this.props.number}
                </span>

                <Grafico full={this.props.full} half={this.props.half} colorone="#00A4F7" colortwo="#00F190" legend="none"></Grafico>

<<<<<<< HEAD
                <div className="horaCategoria">
=======
            </div>
        )
    }
}


   /*             <div className="horaCategoria">
>>>>>>> 5024f1f82b7f7f40410bea0c9e9781fd366aba3f
                    <span>Horas cadastradas:</span>
                    <span><b>{this.props.half}</b></span>
                </div>

                <div className="horaCategoria">
                    <span>Limite da categoria:</span>
                    <span><b>{this.props.full}</b></span>
<<<<<<< HEAD
                </div>
            </div>
        )
    }
}

export default Card
=======
                </div>*/
>>>>>>> 5024f1f82b7f7f40410bea0c9e9781fd366aba3f
