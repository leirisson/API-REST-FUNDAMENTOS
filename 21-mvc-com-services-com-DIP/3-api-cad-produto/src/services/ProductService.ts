import { IProductRepository } from "../repositories/IProductRepository"
import { IProductDTO } from '../repositories/IProductDTO'



export class ProductService {
    constructor(
        private repository: IProductRepository
    ){}

    create(data: IProductDTO){
        return this.repository.create(data)
    }
}