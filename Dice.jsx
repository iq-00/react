import React from "react"
import "./main.css"

function Dice(param) {
    return (
        <button className={param.isFixed ? "fixed" : ""} onClick={() => {
            param.fixed(param.id)
            if (param.isEnd()) param.nextLevel()
        }}> {param.value}</button >
    )
}

export { Dice }