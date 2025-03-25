import { Suspense } from "react";
import { PostInfo } from "./_components/post";
import Loading from "./_loading";

export default async function DetailPost({
    params
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params;


        //Suspense é uma componente do react que é usado para lidar com carregamentos assíncronos de componenetes ou dados
        //Dentro do suspense utilizamos o fallback que é o componente que será renderizado enquanto o componente principal não é carregado
        //E dentro do fallback chamamos o componente Loading que foi feito dentro de um arquivo loading.tsx
        //Ele também não faz a página carregar inteira, seria somente o conteúdo da página que está sendo carregado.
        return (
            <div>
                <h1 className="text-center font-semibold text-center text-5xl">Detalhe do post: {id}</h1>

                <Suspense fallback={<Loading/>}> 
                    <PostInfo id={id} />
                </Suspense>
            </div>
        );

}