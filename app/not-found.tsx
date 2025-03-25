//Nesse arquivo a gente coloca uma mensagem de quando a página não é encontrada

import Link from "next/link";

export default function NotFound(){ //Fazemos esse corpo de código//
    return(
        //<div> é a estilização geral dos parágrafos
        //<h1> 1° formato de título
        //<p> parágrafo
        <div className="flex flex-col items-center justify-center"> 
            <h1 className="text-center font-bold mt-9 text-6xl">Página 404 não encontrada</h1>
            <p>Essa página que tentou acessar não existe</p>

            <Link href="/">
                Voltar pra página de início
            </Link>
        </div> 
    )
}