import { Metadata } from "next"

export const metadata: Metadata = { //metadata são informações dentro de uma página e podem definir parâmetros também
  title: 'Home - Aula Next JS do zero!', //título da página
  description: 'Aprendendo NextJS do zero',
  openGraph: { //quando compartilhamos o site em algum local o OpenGraph é como fará o conteúdo ser visto no compartilhamento
  title: 'Aprendo NextJS do zero', //Título do conteúdo
  images: ['https://sujeitoprogramador.com/steve.png'] //Aqui será a imagem que queremos que seja mostrada (essa é apenas um exemplo)
  },
  
  robots:{
    index: true,
    follow: true,
    nocache: true,
    googleBot:{
    index: true,
    follow: true,
    }
  }
}

export const revalidate = 60;


export default function Home(){ //Aqui é a página home

  const ranbomNumber =Math.random() * 10;
  return (
    <div className="flex flex-col justify-center items-center h-screen text-7xl font-bold text-white">
      <h1>Página HOME</h1>
      <br />
      <h2>Número gerado: {ranbomNumber}</h2>
    </div>
  )
}