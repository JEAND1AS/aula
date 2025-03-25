//O loading é um arquivo que faz a página toda carregar para poder mostrar o conteúdo que está sendo carregado

export default function Loading() {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <h1 className="mt-4 text-2xl font-semibold">Carregando...</h1>
        </div>
    );
}