import "./globals.css";

import { Header } from "../components/header"
import { Metadata } from "next"

export const metadata: Metadata = { 
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >

        <Header/>

        {children}
      </body>
    </html>
  );
}
