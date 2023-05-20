import React from "react";
import { Dice } from "./component/Dice";

function App() {

    let [level, setLevel] = React.useState(3)

    let [count, setCount] = React.useState(Array(level).fill(1).map((val, ind) => {
        return {
            value: Math.floor(Math.random() * (level - 1 + 1) + 1),
            fixed: false,
            id: ind
        }
    }))

    function roll() {
        if (isCompleted()) {
            if (!isEnd()) {
                alert("remove some dies to continue")
            }
        }
        else
            setCount(prev => {
                return count.filter(val => {
                    return val.fixed ? [...prev] : [val.value = Math.floor(Math.random() * (level - 1 - 1 + 1) + 1)]
                })
            })
    }

    function nextLevel() {
        setLevel(++level)
        setCount(Array(level).fill(1).map((val, ind) => {
            return {
                value: Math.floor(Math.random() * (level - 1 + 1) + 1),
                fixed: false,
                id: ind
            }
        }))

    }

    function fixed(id) {
        setCount([...count], count[id].fixed = !count[id].fixed)
    }

    function isEnd() {
        if (!isCompleted()) return false

        for (let i of count) {
            if (i.value == count[0].value) continue
            else return false
        }
        return true
    }

    function isCompleted() {
        for (let i of count) {
            if (i.fixed == true) continue
            else return false
        }
        return true
    }
    return (
        <div className="app">
            <h1>Roll It</h1>
            <h2>Level {level - 2}</h2>
            <p>Roll until all dice are the same <br />Click each die to freeze it at its current value between rolls</p>

            <div className="dice">
                {
                    count.map(val => {
                        return <Dice value={val.value} id={val.id} fixed={fixed} isFixed={val.fixed} isEnd={isEnd} nextLevel={nextLevel} />
                    })
                }
            </div>

            <input type="button" onClick={roll} value="Roll" />
        </div>
    )
}


export default App
