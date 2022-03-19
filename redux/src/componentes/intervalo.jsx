import "./Intervalo.css"
import React from "react"

import Card from "./Card"

export default props => {
    const {min, max} = props
    return(
        <Card title = "Intervalo de Números" red>
            <div className="Intervalo">
                <span>
                    <span>Mínimo:</span>
                    <input type="number" value={min} />
                </span>
                <span>
                    <span>Máximo:</span>
                    <input type="number" value={max} />
                </span>
            </div>
        </Card>
    )
}