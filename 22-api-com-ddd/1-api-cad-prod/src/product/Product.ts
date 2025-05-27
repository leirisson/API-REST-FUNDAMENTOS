export class Product {
    constructor(
        public readonly id: string,
        public name: string,
        public price: number,
        public quantity: number

    ) { }

    updatedDetails(name: string, price: number, quantity: number) {
        this.name = name
        this.price = price
        this.quantity = quantity
    }


}

// 🔎 A entidade representa o produto real: tem nome, preço e quantidade.