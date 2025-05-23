import { Request, Response, NextFunction } from "express";

/**
 * Na requisição com a autorização do tipoe: API Key
 * é preciso mandar a Key: chave_autencicacao
 * é preciso mandar o valor da chave que é: meu-token-secreto
 * caso não senha essa chave ou o valor estaja errado vai cair no não autorizado !
 * 
 * EXPLICAÇÃO 2:
 * Neste exemplo, o middleware authMiddleware verifica se o token enviado no cabeçalho da requisição é igual a 'meu-token-secreto'. 
 * Se for, o usuário é considerado autenticado e pode acessar a rota /protegido. Caso contrário, ele recebe uma resposta 401 Não autorizado.
 */


export function authMiddleware(request: Request, response: Response, next: NextFunction) {
    const token = request.headers['chave_autencicacao']

    if(token === 'meu-token-secreto'){
        return next()  // Usuário autenticado, passa para o próximo middleware
    } else {
        response.status(401).send('Não autorizado')
    }
}