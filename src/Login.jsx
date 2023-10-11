import React, {useState} from "react"
export default function App(){
    const [valor, setValor] = useState(0);

    function decremente(){
        setValor (oldValor => oldValor - 100)
    }

    function incremente(){
        setValor (oldValor => oldValor + 100)
    }

    return(
        <>
            <h1>App para teste  2</h1>
            <hr />
            <p>Valor: {valor}</p>
            <button onClick={decremente}>Decremento </button>
            <button onClick={incremente}>Incremento</button>
        </>
    )
}