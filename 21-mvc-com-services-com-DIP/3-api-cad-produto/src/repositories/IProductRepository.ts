import { IProductDTO } from './IProductDTO'


export interface IProductRepository {
    create(data: IProductDTO): Promise<void> // implementado 
    findAll(): Promise<IProductDTO[]>
    findById(id: string): Promise<IProductDTO | null>
    update(id: string, data: IProductDTO): Promise<void>
    delete(id: string): Promise<void>
}

// Interface do Repositório (DIP)