export interface TokenPayload {
    role: string | 'leitor'
    userName: string
    sub: string
}