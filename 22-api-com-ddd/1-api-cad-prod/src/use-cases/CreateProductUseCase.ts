import { Product } from "../product/Product"
import { ProductRepository } from "../product/ProductRepository"
import { randomUUID } from 'crypto'

export class createProductUseCase {
    constructor(private repo: ProductRepository){}

    async execute(name: string, price: number, quantity:number): Promise<Product>{
        const product = new Product(
            randomUUID(),
            name,
            price,
            quantity
        )

        return product
    }
}

// ✨ É aqui que a mágica acontece. A lógica de "criar produto" está aqui.

