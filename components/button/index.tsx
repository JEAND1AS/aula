'use client'

import { useState } from "react"

export function Button(){
    const[nome, setNome] = useState("Sujeito programador")

    function handleChanceName(){
        setNome("Jean Dias")
    }

    return(
        <div>
            <button onClick={handleChanceName}>Alterar nome</button><br />
            <h3>Nome: {nome}</h3>
        </div>
    )
}