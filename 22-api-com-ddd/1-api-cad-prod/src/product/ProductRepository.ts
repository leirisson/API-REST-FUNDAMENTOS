import { Product } from './Product'

export interface ProductRepository {
    save(product: Product): Promise<void>
    findAll(): Promise<Product[]>
    findById(id: string): Promise<Product | null>
    update(product: Product): Promise<void>
    delete(id: string): Promise<void>
}

// 🔌 Essa interface diz como o sistema vai acessar produtos, mas não implementa ainda.