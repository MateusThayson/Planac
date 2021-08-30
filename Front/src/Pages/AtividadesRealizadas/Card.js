import React, { Component } from 'react'
import Grafico from './Grafico'

export default class Card extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="cardAtividade" style={{background:this.props.color}}>

                <h4 className="nomeCategoria">{this.props.title}
                </h4>
                <span className="romanoCategoria">
                    {this.props.number}
                </span>

                <Grafico full={this.props.full} half={this.props.half} colorone="#00A4F7" colortwo="#00F190" legend="none"></Grafico>

            </div>
        )
    }
}


   /*             <div className="horaCategoria">
                    <span>Horas cadastradas:</span>
                    <span><b>{this.props.half}</b></span>
                </div>

                <div className="horaCategoria">
                    <span>Limite da categoria:</span>
                    <span><b>{this.props.full}</b></span>
                </div>*/