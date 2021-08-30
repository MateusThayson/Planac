/*import React, { Component } from 'react'
import { Chart } from "react-google-charts";

export class Grafico extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Chart
                    width={'100%'}
                    height={'100%'}
                    chartType="PieChart"
                    loader={<div>Carregando...</div>}
                    data={[
                        ['Progresso geral', 'Horas'],
                        ['Horas cadastradas', parseInt(this.props.half)],
                        ['Horas faltantes', parseInt((this.props.full - this.props.half))],
                    ]}
                    options={{
                        //     title: 'My Daily Activities',
                        pieSliceText: 'value',
                        pieHole: 0.5,
                        tooltip: { trigger: 'none' },
                        slices: {
                            0: { color: this.props.colorum },
                            1: { color: this.props.colortwo },
                        },
                        backgroundColor: 'transparent',
                        legend: this.props.legend
                    }}
                    rootProps={{ 'data-testid': '1' }}
                />
            </div>
        )
    }
}

export default Grafico
*/

export default function Grafico() {
    return(
        <div className="horasInfo">
            <h3>Horas cadastradas: 110</h3>
            <h3>Horas restantes: 86</h3>
            <h3> Limite: 196</h3>
        </div>
    )
}