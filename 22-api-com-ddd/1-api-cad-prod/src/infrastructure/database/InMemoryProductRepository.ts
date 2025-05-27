import { ProductRepository } from "../../product/ProductRepository"
import { Product } from "../../product/Product"

export class InMemoryProductRepository implements ProductRepository {
    private products: Product[] = []


    async save(product: Product): Promise<void> {
        this.products.push(product)
    }

    async findAll(): Promise<Product[]> {
        return this.products
    }

    async findById(id: string): Promise<Product | null> {
        return this.products.find(product => product.id === id) || null
    }

    async update(product: Product): Promise<void> {
        const index = this.products.findIndex(product => product.id === product.id)

        if (index === -1) {
            this.products[index] = product
        }
    }

    async delete(id: string): Promise<void> {
        this.products = this.products.filter(product => product.id !== id)
    }


}