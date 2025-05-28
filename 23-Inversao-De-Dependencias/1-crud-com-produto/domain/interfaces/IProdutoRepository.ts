import { Produto } from "../../generated/prisma"

export interface IProdutoRepository {
    cadastrar(nome: string, preco: number): Promise<Produto>
    listar(): Promise<Produto[]>
    buscarPorId(id: string): Promise<Produto | null>
    atualizar(id: string, nome: string, preco: number): Promise<Produto | null>
    deletar(id: string): Promise<void>
}