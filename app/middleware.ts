// Nesse arquivo, você pode adicionar middlewares para proteger rotas privadas, por exemplo, e ele só mostrará o conteúdo se o usuário estiver autenticado/logado.

import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest){

    const authenticated = true;

    if(request.nextUrl.pathname.startsWith('/dashboard') && !authenticated){
        console.log("ACESSO LIBERADO")
        return NextResponse.redirect(new URL('/', request.nextUrl));
    }
        
    return NextResponse.next();
}