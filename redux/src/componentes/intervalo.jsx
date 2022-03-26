import "./Intervalo.css"
import React from "react"
import Card from "./Card"

import { connect } from "react-redux"

function Intervalo(props) {
    const {min, max} = props
    return(
        <Card title = "Intervalo de Números" red>
            <div className="Intervalo">
                <span>
                    <span>Mínimo:</span>
                    {/* <input type="number" value={min} onChange={e => props.onMinChanged(+e.target.value)} /> */}
                    <input type="number" value={min}/>
                </span>
                <span>
                    <span>Máximo:</span>
                    {/* <input type="number" value={max} onChange={e => props.onMaxChanged(+e.target.value)} /> */}
                    <input type="number" value={max}/>
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

export default connect(mapStateToProps)(Intervalo)